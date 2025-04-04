from django.urls import path
from .views import run_code

urlpatterns = [
    path('api/runCode/', run_code),
]
