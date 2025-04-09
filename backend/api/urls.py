from django.urls import path
from .views import run_code, RegisterView, login

urlpatterns = [
    path("api/runCode/", run_code),
    path("api/register/", RegisterView.as_view(), name="register"),
    path("api/login/", login, name="login"),
]
