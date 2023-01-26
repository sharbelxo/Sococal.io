from fastapi import FastAPI,Body , HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydantic import BaseModel
from typing import List
from supabase import create_client, Client
import json
import openai
import os
from dotenv import load_dotenv
load_dotenv()
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail



app = FastAPI()


openai.api_key = os.environ.get("OPENAI_KEY")


url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)



class UserCreate(BaseModel):
    email: str
    password: str

@app.post("/register")
async def create_user(user: UserCreate):
    email = user.email
    password = user.password
    try:
        res = supabase.auth.sign_up(email = email, password = password)
        print(res)
        return res
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))




class SignIn(BaseModel):
    email: str
    password: str

@app.post("/signin")
async def sign_in(user: SignIn):
    email = user.email
    password = user.password
    try:
        res = supabase.auth.sign_in(email=email, password=password)
        #/s_client = supabase.table('subscriptions').select(id).eq(res.data["identities"]["user_id"])
        #/ print(s_client)
        #/  res2 = supabase.table('subscriptions')
        return res
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))



# Logout a user
@app.post("/logout")
async def logout():
    try:
        # Revoke the user's token
        result = supabase.auth.sign_out()
        return result
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))


"""
@app.post("/reset-password/{email}")
async def reset_password(email: str):
    try:
        data, error = await supabase.auth.api.reset_password_for_email(email)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error resetting password")
    if error:
        raise HTTPException(status_code=400, detail=error)
    return data
"""


class Email(BaseModel):
    email: str

class testEmail(BaseModel):
    Day: str
    ContentIdea: str
    Caption: str
    Day2: str
    ContentIdea2: str
    Caption2: str

@app.post("/email")
async def send_email(user: Email, test: testEmail):
    html_content = '<h1 style="text-align:center;">Days Content and Ideas</h1>'
    html_content += f'<h2>{test.Day}</h2>'
    html_content += f'<p>Content Idea: {test.ContentIdea}</p>'
    html_content += f'<p>Caption: {test.Caption}</p>'
    html_content += f'<h2>{test.Day2}</h2>'
    html_content += f'<p>Content Idea: {test.ContentIdea2}</p>'
    html_content += f'<p>Caption: {test.Caption2}</p>'
    message = Mail(
        from_email="GeneratedResults@sococal.ai",
        to_emails=user.email,
        subject="your content",
        html_content='html_content')
    try:
        sg = SendGridAPIClient.os.environ.get('SENDGRID_API_KEY')
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e)


class Generate(BaseModel):
    brandName: str
    brandDescription: str
    idealCustomer: str
    voiceTone: str
    promotion: str
    socialMediaPlatform: str
    product: str
    destination: str
    idealCustomerInterests: str

@app.post("/generate_text")
async def generate_text(data: Generate):

    productPrompt = f"Use a 2 to 4 sentence paragraph to write a content idea for {data.product}. Targeting  {data.idealCustomer}, target the given customer in an indirect way mentioning his interests and goals only. \nExamples:\n###\nContent Idea: Arrange a photoshoot of a couple tasting your new chocolate collection in a warm well decorated environment. Focus on displaying the product in different ways.\n###\nContent Idea: Every once in a while, it’s a good idea to show the face (or faces) behind the brand. With Reels, you can show snippets of your daily life, passions, goals and any fun facts about yourself or your team.\n###\nContent Idea: A person in joy after discovering the new subscription that helps him generate ideas and content. Focus on the person to convey a message of relief to the give adience - in pencil drawing style\n###\nContent Idea: vide of an influence at the beach, behind her is the car on sale in real life image style. She is talking about the different features of the car in a persuasive manner.\n###\nContent Idea:Showcasing a product or service with a giveaway is a great way to boost engagement on your Instagram. By inviting users to tag friends, share the post and follow your page, you can create excitement about your offerings and reach new audiences all at a pretty low cost.\n###\nContent Idea:Let audiences know that you’d love to see your product in the wild. By creating a hashtag and asking users to tag you in their posts, you can share how others view your product and use it in their own lives.\nContent Idea:"

    brandPrompt = f"Use a 2 to 4 sentence paragraph to write a content idea for the following business named {data.brandName} , {data.brandDescription}.\nExamples:\n###\nContent Idea: quotes are a great way to get people engaging with your content. Post a quote related to your business.\n###\nContent Idea: Every once in a while, it’s a good idea to show the face (or faces) behind the brand. With Reels, you can show snippets of your daily life, passions, goals and any fun facts about yourself or your team.\n###\nContent Idea: create a poll on Twitter or Instagram Stories. You can also use them to learn more about your audience’s demographics, interests, preferences, and more. This is a great way to build a connection with your audience\n###\nContent Idea: Introducing your team members or showing behind-the-scenes footage of your business can go a long way in humanizing your brand. Create a carousel showing different team members and their roles.\n###\nContent Idea:Showcasing a product or service with a giveaway is a great way to boost engagement on your Instagram. By inviting users to tag friends, share the post and follow your page, you can create excitement about your offerings and reach new audiences all at a pretty low cost.\n###\nContent Idea: One way to get ahead of the game and provide social proof front-and-centre is by sharing testimonials in your posts. This will help build trust among your audience.\nContent Idea:"

    contentIdea1 = openai.Completion.create(
        engine="text-davinci-003",
        prompt=productPrompt,
        temperature= 1,
        max_tokens= 300,
        top_p= 1,
        frequency_penalty= 0.7,
        presence_penalty= 0.8
    )
    caption1 = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Caption: Up to 50% SALE Starts Today on ALL Winter Collection. Shop Instore & Online www.fidelverta.com📍Visit Us in Dekweneh or Contact us at 📲71999449 #fidelverta #clothes #sale #fashionstyle #men #winter #fashion #lebanon #shirt #style #onlineshopping #winterlook #shoponline #shoes #boots #shopnow #leather #explore.\nCaption:Bolder, More Rugged and More Fun. To learn more about the #RAV4 #Hybrid , click here: https://toyotalebanon.com/Vehicles/19/rav4-hybrid #Toyota #Rav4 #Hybrid #ToyotaLebanon\nCaption: Hit the studio with a pop of color 🧡 The Empower Collection from @hm_move features zip pants, seamless bikers and tights, all designed so there’s nothing holding you back. #HMmove #HoweverYouMove.\nCreate a  {data.socialMediaPlatform}  caption for the following Content Idea:\" {contentIdea1.choices[0].text}  \"\nThe voice tone of the caption should be: {data.voiceTone} \nWe are promoting: {data.promotion} \nCall to action:  {data.destination} \nIdeal Customer is:  {data.idealCustomer} \nThat has the following interests:  {data.idealCustomerInterests} \nInclude 5 hashtags, no quotations in your answer and add some emojis if needed.",
        temperature= 1,
        max_tokens= 300,
        top_p= 1,
        frequency_penalty= 0.7,
        presence_penalty= 0.8
    )
    contentIdea2 = openai.Completion.create(
        engine="text-davinci-003",
        prompt=brandPrompt,
        temperature= 1,
        max_tokens= 300,
        top_p= 1,
        frequency_penalty= 0.7,
        presence_penalty= 0.8
    )
    caption2 = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Caption: Up to 50% SALE Starts Today on ALL Winter Collection. Shop Instore & Online www.fidelverta.com📍Visit Us in Dekweneh or Contact us at 📲71999449 #fidelverta #clothes #sale #fashionstyle #men #winter #fashion #lebanon #shirt #style #onlineshopping #winterlook #shoponline #shoes #boots #shopnow #leather #explore.\nCaption:Bolder, More Rugged and More Fun. To learn more about the #RAV4 #Hybrid , click here: https://toyotalebanon.com/Vehicles/19/rav4-hybrid #Toyota #Rav4 #Hybrid #ToyotaLebanon\nCaption: Hit the studio with a pop of color 🧡 The Empower Collection from @hm_move features zip pants, seamless bikers and tights, all designed so there’s nothing holding you back. #HMmove #HoweverYouMove.\nCreate a  {data.socialMediaPlatform}  caption for the following Content Idea:\" {contentIdea2.choices[0].text}  \"\nThe voice tone of the caption should be: {data.voiceTone} \nWe are promoting: {data.promotion} \nCall to action:  {data.destination} \nIdeal Customer is:  {data.idealCustomer} \nThat has the following interests:  {data.idealCustomerInterests} \nInclude 5 hashtags, no quotations in your answer and add some emojis if needed.",
        temperature= 1,
        max_tokens= 300,
        top_p= 1,
        frequency_penalty= 0.7,
        presence_penalty= 0.8
    )
    return {
    "Day1": {
        "ContentIdea": contentIdea1.choices[0].text,
        "Caption": caption1.choices[0].text
    },
    "Day2": {
        "ContentIdea": contentIdea2.choices[0].text,
        "Caption": caption2.choices[0].text
    }
}

