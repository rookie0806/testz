# Generated by Django 3.1.13 on 2021-08-29 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crawl', '0002_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='text',
            name='text',
            field=models.CharField(max_length=15),
        ),
    ]
