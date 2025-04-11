from django.urls import path
from .views import run_code, RegisterView, login, UserProfile

urlpatterns = [
    path("api/runCode/", run_code),
    path("api/register/", RegisterView.as_view(), name="register"),
    path("api/login/", login, name="login"),
     path("api/user/profile/", UserProfile.as_view(), name="user-profile"),
]


# Video QUESTION

# Discuss a memorable trip or vacation you have taken. What made it unforgettable? Provide Specific examples.


# according to the Instruction and ques, point out and explain any instances when assumptions are made in the following passage. provide references/evidence from the text.

# instructions:statements within the passage should logically align without contradictory elements.

# passgae: "the recent study indicates that urban living is more stressful than living in rular areas. this is obvoisludy true because most cities have higher crime rates and busier lifestyles."


# share you favourite meal to cook or eat. waht ingrasients are involve, and why do you like it ?

# passage:"the new energy drink provides a powerful boost of energy while also promotinh relaxaiton and restful sleep, making it deal for any time of the day."

# instructions: all claims should be backed by credible sourcces or data to ensure accuracy and reliability.

# passage:"This exercies routine is the quickest way to lose weight and will improve your health more than any other method currently available."