from rest_framework import serializers
from . import models

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Data
        fields = (
            'image',
            'url',
        )

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Text
        fields = (
            'text',
        )