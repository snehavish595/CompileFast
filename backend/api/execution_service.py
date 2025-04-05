import subprocess
import tempfile
import os


def execute_code(script, language):
    output = ""

    if not script.isprintable():
        return {"error": "Invalid characters in code."}

    if language == "python3":
        output = execute_python(script)
    elif language == "c":
        output = execute_c(script)
    elif language == "cpp":
        output = execute_cpp(script)
    elif language == "javascript":
        output = execute_js(script)
    else:
        output = {"error": f"Unsupported language: {language}"}

    return output


def execute_python(script):
    """Executes Python code."""
    with tempfile.NamedTemporaryFile(delete=False, suffix=".py", mode="w") as temp_file:
        temp_file.write(script)
        temp_file_path = temp_file.name

    try:
        result = subprocess.run(
            ["python", temp_file_path],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            timeout=5,
        )
        output = result.stdout if result.returncode == 0 else result.stderr
    except subprocess.TimeoutExpired:
        output = "Python execution timed out."
    except Exception as e:
        output = f"Python execution error: {str(e)}"
    finally:
        os.unlink(temp_file_path)

    return output



def execute_c(script):
    """Executes C code."""
    with tempfile.NamedTemporaryFile(delete=False, suffix=".c", mode="w") as temp_file:
        temp_file.write(script)
        temp_file_path = temp_file.name

    try:
        result = subprocess.run(
            ["gcc", temp_file_path, "-o", "/tmp/temp_c_exec"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )
        if result.returncode != 0:
            return {"error": "C compilation failed", "details": result.stderr}

        # Run the compiled C program
        output = subprocess.run(
            ["/tmp/temp_c_exec"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        ).stdout
    except subprocess.TimeoutExpired:
        output = "C execution timed out."
    except Exception as e:
        output = f"C execution error: {str(e)}"
    finally:
        os.unlink(temp_file_path)
        os.unlink("/tmp/temp_c_exec")

    return output


def execute_cpp(script):
    """Executes C++ code."""
    with tempfile.NamedTemporaryFile(
        delete=False, suffix=".cpp", mode="w"
    ) as temp_file:
        temp_file.write(script)
        temp_file_path = temp_file.name

    try:
        result = subprocess.run(
            ["g++", temp_file_path, "-o", "/tmp/temp_cpp_exec"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )
        if result.returncode != 0:
            return {"error": "C++ compilation failed", "details": result.stderr}

        # Run the compiled C++ program
        output = subprocess.run(
            ["/tmp/temp_cpp_exec"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        ).stdout
    except subprocess.TimeoutExpired:
        output = "C++ execution timed out."
    except Exception as e:
        output = f"C++ execution error: {str(e)}"
    finally:
        os.unlink(temp_file_path)
        os.unlink("/tmp/temp_cpp_exec")

    return output


def execute_js(script):
    """Executes JavaScript code."""
    with tempfile.NamedTemporaryFile(delete=False, suffix=".js", mode="w") as temp_file:
        temp_file.write(script)
        temp_file_path = temp_file.name

    try:
        result = subprocess.run(
            ["node", temp_file_path],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            timeout=5,
        )
        output = result.stdout if result.returncode == 0 else result.stderr
    except subprocess.TimeoutExpired:
        output = "JavaScript execution timed out."
    except Exception as e:
        output = f"JavaScript execution error: {str(e)}"
    finally:
        os.unlink(temp_file_path)

    return output
