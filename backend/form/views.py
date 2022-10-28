from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
import sys 
from bson import json_util
import json




sys.path.append('..')

from utils import client


information = client['form']['collection']


class ReactView(APIView):
	
	def get(self, request):
		cleaned = json.loads(json_util.dumps(information.find_one()))
		return Response(cleaned)
	
	def post(self, request):
		react_data = request.data
		insertion = information.insert_one(react_data)
		
		return Response(print(insertion.inserted_id))

	