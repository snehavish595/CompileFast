"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MonacoEditor from "@monaco-editor/react";
import { FaPlay, FaTrash, FaCopy } from "react-icons/fa";

export default function Compiler() {
  const [code, setCode] = useState(`console.log("Hello, World!");`);
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const response = await fetch("/api/runCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          script: code,
          language: "nodejs",
          versionIndex: "3",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to execute code");
      }

      const result = await response.json();
      setOutput(result.output || "Error executing code");
    } catch (err) {
      setOutput("Execution failed: " + err.message);
    }
  };

  const clearCode = () => {
    setCode("");
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard");
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-7 mt-6">
            Online Code Editor
          </h1>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Editor Section */}
            <div className="w-full md:w-3/5 bg-gray-800 p-4 rounded-lg shadow-md">
              {/* Toolbar */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">Editor</h2>
                <div className="flex gap-3">
                  <button
                    onClick={runCode}
                    className="bg-green-500 p-2 rounded hover:bg-green-600 transition cursor-pointer"
                  >
                    <FaPlay size={20} />
                  </button>
                  <button
                    onClick={clearCode}
                    className="bg-red-500 p-2 rounded hover:bg-red-600 transition cursor-pointer"
                  >
                    <FaTrash size={20} />
                  </button>
                  <button
                    onClick={copyCode}
                    className="bg-blue-500 p-2 rounded hover:bg-blue-600 transition cursor-pointer"
                  >
                    <FaCopy size={20} />
                  </button>
                </div>
              </div>

              <MonacoEditor
                height="450px"
                defaultLanguage="javascript"
                theme="vs-dark"
                value={code}
                onChange={(newCode) => setCode(newCode)}
                options={{
                  fontSize: 16,
                  minimap: {
                    enabled: false,
                  },
                  automaticLayout: true,
                }}
              />
            </div>

            {/* Output Section */}
            <div className="w-full md:w-2/5 bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-3">Output</h2>
              <pre className="bg-gray-900 p-3 rounded overflow-auto text-green-400 h-[450px]">
                {output || "Run your code to see the output here..."}
              </pre>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
