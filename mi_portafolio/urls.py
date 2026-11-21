from django.urls import include,path
from django.conf.urls import handler404
urlpatterns=[path('',include('portafolio.urls'))]
handler404='portafolio.views.error_404'
