from django.db import models

# Create your models here.
class Data(models.Model):
    SNS_CHOICES = (
		('NAVER', 'NAVER'),
        ('INSTAGRAM', 'INSTAGRAM'),
    )
    image = models.ImageField()
    url = models.CharField(max_length=100, null=True)
    sns = models.CharField(max_length=100, choices=SNS_CHOICES, default="INSTAGRAM")
    sns_id = models.CharField(max_length=100, null=True)

class Text(models.Model):
    text = models.CharField(max_length=15)