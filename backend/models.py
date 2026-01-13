from pydantic import BaseModel, Field, ConfigDict, BeforeValidator, EmailStr
from typing import Optional, List, Annotated
from datetime import datetime
from bson import ObjectId

# Pydantic v2 compatible ObjectId
PyObjectId = Annotated[str, BeforeValidator(str)]

class JobBase(BaseModel):
    title: str = Field(..., min_length=1)
    location: str = Field(..., min_length=1)
    job_type: str = Field(..., min_length=1) # Employment Type
    experience: str = Field(..., min_length=1)
    positions: int = Field(default=1, ge=1)
    compensation: str = Field(default="Competitive", min_length=1)
    
    # New detailed fields replacing description/requirements
    role_overview: Optional[str] = None
    key_responsibilities: str = Field(..., min_length=10)
    core_skills: str = Field(..., min_length=10)
    highly_desirable: str = Field(..., min_length=10)
    
    # Optional 'Other' section
    other_heading: Optional[str] = None
    other_content: Optional[str] = None
    
    is_active: bool = True

class JobCreate(JobBase):
    pass

class JobUpdate(BaseModel):
    title: Optional[str] = None
    location: Optional[str] = None
    job_type: Optional[str] = None
    experience: Optional[str] = None
    positions: Optional[int] = None
    compensation: Optional[str] = None
    role_overview: Optional[str] = None
    key_responsibilities: Optional[str] = None
    core_skills: Optional[str] = None
    highly_desirable: Optional[str] = None
    other_heading: Optional[str] = None
    other_content: Optional[str] = None
    is_active: Optional[bool] = None

class Job(JobBase):
    # The _id field from Mongo will be mapped to this id field
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    created_at: datetime = Field(default_factory=datetime.utcnow)

    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
    )

class ApplicationBase(BaseModel):
    job_id: str = Field(..., description="ID of the job applying for")
    job_title: str = Field(..., description="Snapshot of job title")
    name: str = Field(..., min_length=1)
    email: EmailStr
    phone: str = Field(..., min_length=5)
    experience: str = Field(..., description="Years of experience or summary")
    address: Optional[str] = None
    why_hire_me: str = Field(..., min_length=1)
    linkedin_url: Optional[str] = None
    github_url: Optional[str] = None
    resume_path: str = Field(..., description="Path to stored resume file")

class ApplicationCreate(ApplicationBase):
    pass

class Application(ApplicationBase):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="New", description="New, Reviewed, Interview, Rejected, Hired")

    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
    )
