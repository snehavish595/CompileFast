import subprocess
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import tempfile
import os
from .execution_service import execute_code

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer, CharField

@csrf_exempt
def run_code(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            script = data.get('script')
            language = data.get('language')
            version = data.get('versionIndex')

            if not script or not language:
                return JsonResponse({"error": "Missing script or language"}, status=400)

            output = execute_code(script, language)

            if language == "python3":
                with tempfile.NamedTemporaryFile(delete=False, suffix=".py", mode='w') as temp_file:
                    temp_file.write(script)
                    temp_file_path = temp_file.name

                try:
                    result = subprocess.run(
                        ['python', temp_file_path],
                        stdout=subprocess.PIPE,
                        stderr=subprocess.PIPE,
                        text=True,
                        timeout=5
                    )
                    output = result.stdout if result.returncode == 0 else result.stderr
                except subprocess.TimeoutExpired:
                    output = "Python execution timed out."
                except Exception as e:
                    output = f"Python execution error: {str(e)}"
                finally:
                    os.unlink(temp_file_path)

            elif language == "nodejs":
                with tempfile.NamedTemporaryFile(delete=False, suffix=".js", mode='w') as temp_file:
                    temp_file.write(script)
                    temp_file_path = temp_file.name

                try:
                    result = subprocess.run(
                        ['node', temp_file_path],
                        stdout=subprocess.PIPE,
                        stderr=subprocess.PIPE,
                        text=True,
                        timeout=5
                    )
                    output = result.stdout if result.returncode == 0 else result.stderr
                except subprocess.TimeoutExpired:
                    output = "Node.js execution timed out."
                except Exception as e:
                    output = f"Node.js execution error: {str(e)}"
                finally:
                    os.unlink(temp_file_path)

            else:
                output = f"Language '{language}' execution not supported yet."

            return JsonResponse({"output": output})

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Method not allowed"}, status=405)




# User Registration Serializer
class UserSerializer(Serializer):
    username = CharField(max_length=150)
    email = CharField(max_length=255)
    password = CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


# Registration View
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Login View to get JWT token
@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    if user is not None:
        # Generate JWT token
        refresh = RefreshToken.for_user(user)
        return Response({
            'access_token': str(refresh.access_token),
            'refresh_token': str(refresh),
        })
    return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

class UserProfile(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        user_data = {
            "username": user.username,    
        }

        return Response(user_data, status=200)