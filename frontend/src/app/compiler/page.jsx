"use client";
import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Compiler() {
  const [code, setCode] = useState("console.log('Hello, world!');");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const response = await fetch("https://api.jdoodle.com/v1/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          script: code,
          language: "nodejs",
          versionIndex: "3",
          clientId: "your_client_id",
          clientSecret: "your_client_secret"
        })
      });
      const result = await response.json();
      setOutput(result.output || "Error executing code");
    } catch (error) {
      setOutput("Execution failed");
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-center mb-6">Online Code Editor</h1>

          {/* Flex container for side-by-side layout */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Editor */}
            <div className="w-full md:w-3/5 bg-gray-800 p-4 rounded-lg shadow-md">
              <MonacoEditor
                height="400px"
                defaultLanguage="javascript"
                theme="vs-dark"
                value={code}
                onChange={(newCode) => setCode(newCode)}
              />
            </div>

            {/* Output Section */}
            <div className="w-full md:w-2/5 bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Output</h2>
              <pre className="bg-gray-900 p-3 rounded-lg overflow-auto text-green-400 h-[400px]">
                {output || "Run your code to see the output here..."}
              </pre>
            </div>
          </div>

          {/* Run Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={runCode}
              className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              Run Code
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
