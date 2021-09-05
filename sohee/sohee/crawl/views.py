from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from rest_framework.permissions import AllowAny
import datetime
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


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

class getXY(APIView):
    def get(self, format=None):
        data = models.XY.objects.all()
        serializer = serializers.XYSerializer(data, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class setXY(APIView):


    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(setXY, self).dispatch(*args, **kwargs)

    def post(self, request, format=None):
        models.XY.objects.all().delete()
        serializer = serializers.XYSerializer(data=request.data, many=True)
        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)