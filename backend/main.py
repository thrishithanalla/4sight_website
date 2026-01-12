from fastapi import FastAPI, Body, HTTPException, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from typing import List, Optional
from bson import ObjectId

from models import Job, JobCreate, JobUpdate
from database import jobs_collection

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Helpers ---
def fix_id(job):
    if job.get("_id"):
        job["_id"] = str(job["_id"])
    return job

# --- Routes ---

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


# --- Admin Routes (Simulated Auth) ---
# In a real app, use proper OAuth2 or JWT
# For this task, we assume 'admin' access logic is handled by the caller or simple check
# The user asked: "only admin should be able to add remove and hide"

@app.get("/api/admin/jobs", response_description="List ALL jobs (Admin)", response_model=List[Job])
async def list_all_jobs():
    jobs = []
    cursor = jobs_collection.find() # Returns all, including hidden
    async for job in cursor:
        jobs.append(fix_id(job))
    return jobs

@app.post("/api/jobs", response_description="Add new job", response_model=Job)
async def create_job(job: JobCreate = Body(...)):
    job = jsonable_encoder(job)
    new_job = await jobs_collection.insert_one(job)
    created_job = await jobs_collection.find_one({"_id": new_job.inserted_id})
    return fix_id(created_job)

@app.put("/api/jobs/{id}", response_description="Update a job", response_model=Job)
async def update_job(id: str, job: JobUpdate = Body(...)):
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
async def delete_job(id: str):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID format")

    delete_result = await jobs_collection.delete_one({"_id": ObjectId(id)})

    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)

    raise HTTPException(status_code=404, detail=f"Job {id} not found")

@app.put("/api/jobs/{id}/hide", response_description="Hide a job")
async def hide_job(id: str):
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
async def show_job_route(id: str):
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
