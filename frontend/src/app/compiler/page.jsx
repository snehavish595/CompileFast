"use client";
import { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import { FaPlay, FaTrash, FaCopy } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Compiler() {
  const [code, setCode] = useState(`console.log("Hello, World!");`);
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("nodejs");
  const [copied, setCopied] = useState(false);

  const runCode = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/runCode/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          script: code,
          language: language,
          versionIndex: "3",
        }),
      });

      if (!response.ok) throw new Error("Failed to execute code");

      const result = await response.json();
      setOutput(result.output || "Error executing code");
    } catch (err) {
      setOutput("Execution failed: " + err.message);
    }
  };

  const clearCode = () => setCode("");
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (language === "nodejs") {
      setCode(`console.log("Hello from Node.js");`);
    } else if (language === "python3") {
      setCode(`print("Hello from Python")`);
    } else if (language === "java") {
      setCode(`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello from Java");
  }
}`);
    }
  }, [language]);

  const getLanguageName = (lang) => {
    switch (lang) {
      case "nodejs":
        return "Node.js";
      case "python3":
        return "Python";
      case "java":
        return "Java";
      default:
        return "Code";
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#0f172a] text-white min-h-screen py-10">
        <div className="max-w-[95%] mx-auto px-4">
          <h1 className="text-2xl font-bold text-center mb-10 mt-12">
            Online {getLanguageName(language)} Compiler
          </h1>

          <div className="flex flex-col lg:flex-row gap-6 ">
            {/* Editor Section */}
            <div className="w-full lg:w-1/2 bg-[#1e293b] rounded-lg shadow-lg">
              {/* Toolbar */}
              <div className="flex justify-between items-center px-4 py-3 bg-[#334155] border-b border-gray-700">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-[#475569] text-white p-2 rounded focus:outline-none"
                >
                  <option value="nodejs">Node.js</option>
                  <option value="python3">Python</option>
                  <option value="java">Java</option>
                </select>

                <div className="relative flex gap-2 group">
                  <button
                    onClick={runCode}
                    className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded flex items-center gap-1 text-sm"
                  >
                    <FaPlay /> Run
                  </button>
                  <button
                    onClick={clearCode}
                    className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded flex items-center gap-1 text-sm"
                  >
                    <FaTrash /> Clear
                  </button>
                  <button
                    onClick={copyCode}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded flex items-center gap-2 text-sm transition"
                  >
                    <FaCopy />
                    Copy
                  </button>

                  {/* Tooltip message */}
                  <div
                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      copied ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Copied!
                  </div>
                </div>
              </div>

              {/* Monaco Editor */}
              <MonacoEditor
                height="520px"
                language={
                  language === "python3"
                    ? "python"
                    : language === "java"
                    ? "java"
                    : "javascript"
                }
                theme="vs-dark"
                value={code}
                onChange={(newCode) => setCode(newCode)}
                options={{
                  fontSize: 15,
                  minimap: { enabled: false },
                  automaticLayout: true,
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                }}
              />
            </div>

            {/* Output Section */}
            <div className="w-full lg:w-1/2 bg-[#1e293b] rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-1">
                Output
              </h2>
              <pre className="bg-[#0f172a] text-green-400 p-4 rounded-lg h-[520px] overflow-auto whitespace-pre-wrap">
                {output || "Run your code to see output here..."}
              </pre>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
