from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

class Project(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str
    tech_stack: str
    github_url: Optional[str] = None
    demo_url: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
