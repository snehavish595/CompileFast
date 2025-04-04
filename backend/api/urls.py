from django.urls import path
from .views import run_code

urlpatterns = [
    path("runCode/", run_code),
]
