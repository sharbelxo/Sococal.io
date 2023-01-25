from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydantic import BaseModel
import json
from typing import List
from supabase import create_client, Client
import json
import sendgrid
from sendgrid.helpers.mail import *
from sendgrid import SendGridAPIClient
import openai


app = FastAPI()

sg = sendgrid.SendGridAPIClient(api_key='SENDGRID_KEY')

openai.api_key = "YOUR_API_KEY"

# Initialize Supabase

su: Client = create_client("SUPABASE_URL",

    "SUPABASE_KEY")

# Define the data model for creating a user
class UserCreate(BaseModel):
    username: str
    password: str
    email: str

# Define the security scheme for basic authentication
security = HTTPBasic()

# Create a user
@app.post("/users")
async def create_user(user: UserCreate):
    try:
        # Insert the user into the 'users' table
        result = await su.auth.users.create(user)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Login a user
@app.post("/login")
async def login(credentials: HTTPBasicCredentials = Depends(security)):
    try:
        # Get the user from the 'users' table
        result = await su.auth.users.login(credentials.username, credentials.password)
        return result
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))

# Logout a user
@app.post("/logout")
async def logout(token: str):
    try:
        # Revoke the user's token
        result = await su.auth.users.logout(token)
        return result
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))




class Request(BaseModel):
    day: str
    contentIdea: str
    caption: str

@app.post("/email")
async def send_email(request: Request):
     message = Mail(
        from_email='GeneratedResults@sococal.ai',
        to_emails='madesabbah@gmail.com',
        subject='Your AI Generated Content is Good to Go!',
        html_content='<strong>The following text is a test, thank you</strong>')
try:
    """response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)"""
except Exception as e:
    print(e.message) 




@app.post("/generate")
async def generate_prompt(prompt1: str, prompt2: str):
    response1 = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt1
    )
    response2 = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt2
    )
    return {"prompt1": response1.choices[0].text, "prompt2": response2.choices[0].text}