from django.contrib import admin
from . import models


@admin.register(models.Data)
class DataAdmin(admin.ModelAdmin):
    search_fields = (
        'url',
        'sns',
        'sns_id'
    )

    list_display = (
        'url',
        'sns',
        'sns_id'
    )
@admin.register(models.Text)
class TextAdmin(admin.ModelAdmin):
    search_fields = (
        'text',
    )

    list_display = (
        'text',
    )

