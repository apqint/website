from django.urls import path
from . import views

urlpatterns = [
    # v1 api urls
    path('v1/', views.default),
]
