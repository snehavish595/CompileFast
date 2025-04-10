from django.urls import path
from .views import run_code, RegisterView, login, UserProfile

urlpatterns = [
    path("api/runCode/", run_code),
    path("api/register/", RegisterView.as_view(), name="register"),
    path("api/login/", login, name="login"),
    path("api/user/profile", UserProfile.as_view(), name="user-profile"),
]
