from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from db import supabase

router = APIRouter(
    prefix="/api/projects",
    tags=["projects"]
)

class ProjectCreate(BaseModel):
    title: str
    description: str
    tech_stack: str
    github_url: str | None = None
    demo_url: str | None = None

@router.get("/")
async def get_projects():
    response = supabase.table("projects").select("*").execute()
    return {"projects": response.data}

@router.post("/")
async def create_project(project: ProjectCreate):
    response = supabase.table("projects").insert(project.model_dump()).execute()
    return {"message": "Project created", "data": response.data}
