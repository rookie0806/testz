from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from rest_framework.permissions import AllowAny
import datetime
from django.db.models import Q
class getData(APIView):
    def get(self, format=None):
        data = models.Data.objects.all()
        serializer = serializers.DataSerializer(data, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class getToWrite(APIView):
    def get(self, format=None):
        data = models.Text.objects.all().last()
        serializer = serializers.TextSerializer(data)
        return Response(data=serializer.data, status=status.HTTP_200_OK)