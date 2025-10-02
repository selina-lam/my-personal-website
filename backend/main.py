from dotenv import load_dotenv, find_dotenv

# Load environment variables FIRST before any other imports
load_dotenv(find_dotenv())

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.projects import router as projects_router

app = FastAPI(
    title="Portfolio API",
    description="Backend API for personal portfolio website",
    version="1.0.0"
)

# Add CORS middleware (important for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # Add your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(projects_router)

@app.get("/")
async def root():
    return {
        "message": "Portfolio API",
        "status": "running",
        "docs": "/docs"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
