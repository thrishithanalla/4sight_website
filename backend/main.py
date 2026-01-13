from fastapi import FastAPI, Body, HTTPException, status, Depends, File, UploadFile, Form
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import List, Optional
from bson import ObjectId
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
import shutil
import uuid

from models import Job, JobCreate, JobUpdate, Application, ApplicationCreate
from database import jobs_collection, applications_collection
import os

app = FastAPI()

# Mount uploads directory for serving resumes
os.makedirs("uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Auth Configuration ---
SECRET_KEY = os.getenv("SECRET_KEY", "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

# Hardcoded Admin User (hashed 'admin123')
FAKE_USERS_DB = {
    "admin": {
        "username": "admin",
        "full_name": "Admin User",
        "email": "admin@example.com",
        "hashed_password": pwd_context.hash("admin123"),
        "disabled": False,
    }
}

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return user_dict
    return None

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(FAKE_USERS_DB, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_user(current_user: dict = Depends(get_current_user)):
    if current_user["disabled"]:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

# --- Helpers ---
def fix_id(job):
    if job.get("_id"):
        job["_id"] = str(job["_id"])
    return job

# --- Routes ---

@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = get_user(FAKE_USERS_DB, form_data.username)
    if not user or not verify_password(form_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["username"]}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/api/jobs", response_description="List all active jobs", response_model=List[Job])
async def list_jobs():
    jobs = []
    # By default, only show active jobs to public
    cursor = jobs_collection.find({"is_active": True})
    async for job in cursor:
        jobs.append(fix_id(job))
    return jobs

@app.get("/api/jobs/{id}", response_description="Get a single job", response_model=Job)
async def show_job(id: str):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    job = await jobs_collection.find_one({"_id": ObjectId(id)})
    if job:
        return fix_id(job)
    raise HTTPException(status_code=404, detail=f"Job {id} not found")

# --- Admin Routes (Protected) ---

@app.get("/api/admin/jobs", response_description="List ALL jobs (Admin)", response_model=List[Job])
async def list_all_jobs(current_user: dict = Depends(get_current_active_user)):
    jobs = []
    cursor = jobs_collection.find() # Returns all, including hidden
    async for job in cursor:
        jobs.append(fix_id(job))
    return jobs

@app.post("/api/jobs", response_description="Add new job", response_model=Job)
async def create_job(job: JobCreate = Body(...), current_user: dict = Depends(get_current_active_user)):
    job = jsonable_encoder(job)
    new_job = await jobs_collection.insert_one(job)
    created_job = await jobs_collection.find_one({"_id": new_job.inserted_id})
    return fix_id(created_job)

@app.put("/api/jobs/{id}", response_description="Update a job", response_model=Job)
async def update_job(id: str, job: JobUpdate = Body(...), current_user: dict = Depends(get_current_active_user)):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID format")

    job = {k: v for k, v in job.dict().items() if v is not None}

    if len(job) >= 1:
        update_result = await jobs_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": job}
        )

        if update_result.modified_count == 1:
            updated_job = await jobs_collection.find_one({"_id": ObjectId(id)})
            if (updated_job):
                return fix_id(updated_job)
    
    existing = await jobs_collection.find_one({"_id": ObjectId(id)})
    if (existing):
        return fix_id(existing)

    raise HTTPException(status_code=404, detail=f"Job {id} not found")

@app.delete("/api/jobs/{id}", response_description="Delete a job")
async def delete_job(id: str, current_user: dict = Depends(get_current_active_user)):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID format")

    delete_result = await jobs_collection.delete_one({"_id": ObjectId(id)})

    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)

    raise HTTPException(status_code=404, detail=f"Job {id} not found")

@app.put("/api/jobs/{id}/hide", response_description="Hide a job")
async def hide_job(id: str, current_user: dict = Depends(get_current_active_user)):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID format")

    # Set is_active to False
    update_result = await jobs_collection.update_one(
        {"_id": ObjectId(id)}, {"$set": {"is_active": False}}
    )

    if update_result.modified_count == 1:
        return {"message": "Job hidden successfully"}
    
    # If not modified, check if it exists
    existing = await jobs_collection.find_one({"_id": ObjectId(id)})
    if existing:
        return {"message": "Job was already hidden"}

    raise HTTPException(status_code=404, detail=f"Job {id} not found")

@app.put("/api/jobs/{id}/show", response_description="Show a job")
async def show_job_route(id: str, current_user: dict = Depends(get_current_active_user)):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID format")

    update_result = await jobs_collection.update_one(
        {"_id": ObjectId(id)}, {"$set": {"is_active": True}}
    )

    if update_result.modified_count == 1:
        return {"message": "Job is now active"}
    
    existing = await jobs_collection.find_one({"_id": ObjectId(id)})
    if existing:
        return {"message": "Job was already active"}

    raise HTTPException(status_code=404, detail=f"Job {id} not found")

from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

# --- Contact Route ---

class ContactForm(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: str
    privacy: bool

def send_email(contact: ContactForm):
    sender_email = os.getenv("SMTP_USER")
    sender_password = os.getenv("SMTP_PASS")
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", 587))

    if not sender_email or not sender_password:
        print("SMTP credentials not set. Email not sent.")
        return False

    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = sender_email # Send to self/admin
    msg['Subject'] = f"New Contact: {contact.name}"

    body = f"""
    New Contact Form Submission:

    Name: {contact.name}
    Email: {contact.email}
    Phone: {contact.phone}
    
    Message:
    {contact.message}
    """
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, sender_email, text)
        server.quit()
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

def send_application_email(application: dict, resume_filename: str):
    sender_email = os.getenv("SMTP_USER")
    sender_password = os.getenv("SMTP_PASS")
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", 587))

    if not sender_email or not sender_password:
        return False

    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = sender_email
    msg['Subject'] = f"New Job Application: {application.get('job_title', 'Unknown')} - {application.get('name')}"

    body = f"""
    New Job Application Received:

    Job: {application.get('job_title')} (ID: {application.get('job_id')})
    
    Candidate Details:
    ------------------
    Name: {application.get('name')}
    Email: {application.get('email')}
    Phone: {application.get('phone')}
    Experience: {application.get('experience')}
    Address: {application.get('address')}
    
    Links:
    ------
    LinkedIn: {application.get('linkedin_url')}
    GitHub: {application.get('github_url')}
    
    Why Hire Me:
    ------------
    {application.get('why_hire_me')}
    
    Resume:
    -------
    stored at: uploads/{resume_filename}
    """
    msg.attach(MIMEText(body, 'plain'))

    # Attach resume
    file_path = os.path.join("uploads", resume_filename)
    if os.path.exists(file_path):
        from email.mime.application import MIMEApplication
        with open(file_path, "rb") as f:
            part = MIMEApplication(f.read(), Name=resume_filename)
            part['Content-Disposition'] = f'attachment; filename="{resume_filename}"'
            msg.attach(part)

    try:
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, sender_email, text)
        server.quit()
        return True
    except Exception as e:
        print(f"Error sending app email: {e}")
        return False

@app.post("/api/applications", response_description="Submit job application")
async def submit_application(
    job_id: str = Form(...),
    job_title: str = Form(...),
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    experience: str = Form(...),
    address: str = Form(None),
    why_hire_me: str = Form(...),
    linkedin_url: str = Form(None),
    github_url: str = Form(None),
    resume: UploadFile = File(...)
):
    # Save Resume
    file_extension = os.path.splitext(resume.filename)[1]
    unique_filename = f"{uuid.uuid4()}{file_extension}"
    file_path = os.path.join("uploads", unique_filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)
        
    # Create Application Object
    application_data = {
        "job_id": job_id,
        "job_title": job_title,
        "name": name,
        "email": email,
        "phone": phone,
        "experience": experience,
        "address": address,
        "why_hire_me": why_hire_me,
        "linkedin_url": linkedin_url,
        "github_url": github_url,
        "resume_path": unique_filename,
        "created_at": datetime.utcnow(),
        "status": "New"
    }
    
    new_app = await applications_collection.insert_one(application_data)
    created_app = await applications_collection.find_one({"_id": new_app.inserted_id})
    
    # Send Email
    send_application_email(application_data, unique_filename)
    
    return fix_id(created_app)

@app.get("/api/applications", response_description="List all applications (Admin)", response_model=List[Application])
async def list_applications(current_user: dict = Depends(get_current_active_user)):
    apps = []
    cursor = applications_collection.find().sort("created_at", -1)
    async for app in cursor:
        apps.append(fix_id(app))
    return apps

@app.post("/api/contact", response_description="Submit contact form")
async def submit_contact_form(contact: ContactForm = Body(...)):
    print(f"--- Contact Form Submission ---")
    print(f"Name: {contact.name}")
    print(f"Email: {contact.email}")
    print(f"Phone: {contact.phone}")
    print(f"Message: {contact.message}")
    
    success = send_email(contact)
    if success:
        print("Email sent successfully.")
    else:
        print("Failed to send email.")
        
    print(f"-------------------------------")
    return {"success": True, "message": "Message received!"}
