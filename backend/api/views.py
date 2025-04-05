import subprocess
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import tempfile
import os
from .execution_service import execute_code

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
