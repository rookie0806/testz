from django.conf.urls import url
from . import views

urlpatterns = [
    url(
        regex=r'^getData/$',
        view=views.getData.as_view(),
        name='getData'
    ),
    url(
        regex=r'^getToWrite/$',
        view=views.getToWrite.as_view(),
        name='getToWrite'
    ),
]