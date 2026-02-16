from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from core.config import settings
from routers import story,job
from database.database import create_tables

create_tables()

app=FastAPI(
    title="Choose your own adventure game API",
    description="api to generate the stories for the project",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(story.router, prefix=settings.API_PREFIX)
app.include_router(job.router, prefix=settings.API_PREFIX)


@app.get("/")
def root():
    return {"message": "Backend is running "}

if __name__=="__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0",port=8000, reload=True)
    
    
