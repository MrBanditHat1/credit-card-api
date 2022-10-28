import environ
import pymongo

#
environ.Env.read_env()
env = environ.Env()

SECRET_PASS = env("DATABASE_PASSWORD")
SECRET_USER = env("DATABASE_USER")


client = pymongo.MongoClient(f"mongodb+srv://{SECRET_USER}:{SECRET_PASS}@cluster0.qjgcw.mongodb.net/?retryWrites=true&w=majority")



