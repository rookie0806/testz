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
     url(
        regex=r'^setsoheeXY/$',
        view=views.setXY.as_view(),
        name='setXY'
    ),
    url(
        regex=r'^getXY/$',
        view=views.getXY.as_view(),
        name='getXY'
    ),
]