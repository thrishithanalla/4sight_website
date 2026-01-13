import motor.motor_asyncio
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://trishitanalla03:120805@cluster0.xfsni.mongodb.net/")
DB_NAME = os.getenv("DB_NAME", "4sight_website")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]
jobs_collection = db["jobs"]
applications_collection = db["applications"]
