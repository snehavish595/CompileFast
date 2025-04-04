from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import requests
import json
import os

@csrf_exempt
def run_code(request):
    if request.method == "POST":
        data = json.loads(request.body)
        script = data.get("script")
        language = data.get("language")
        versionIndex = data.get("versionIndex")

        payload = {
            "script": script,
            "language": language,
            "versionIndex": versionIndex,
            "clientId": os.getenv("JDOODLE_CLIENT_ID"),
            "clientSecret": os.getenv("JDOODLE_CLIENT_SECRET"),
        }

        jdoodle_url = "https://api.jdoodle.com/v1/execute"
        jdoodle_response = requests.post(jdoodle_url, json=payload)
        return JsonResponse(jdoodle_response.json(), safe=False)

    return JsonResponse({"error": "Method not allowed"}, status=405)
