from django.urls import path
from .views import run_code, RegisterView, login

urlpatterns = [
    path("api/runCode/", run_code),
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", login, name="login"),
]
