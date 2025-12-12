from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from core.config import settings
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

if __name__=="__main__":
   
    uvicorn.run("main:app", host="0.0.0.0",port=8000, reload=True)
    