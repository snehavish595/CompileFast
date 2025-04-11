"use client";  // Ensure this is a client-side component

import React, { useState } from "react";  
import api from "../api"; 
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

const Login = () => {
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  // Track loading state
  const [errorMessage, setErrorMessage] = useState("");  // Store error message

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");  // Reset previous error message
  
    // Validate form fields before sending request
    if (!username || !password) {
      setErrorMessage("Please fill in both fields.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await api.post("/login/", {
        username,
        password,
      });
  
      // Check if the response contains an access token
      if (response.data && response.data.access_token) {
        // Store the access token in localStorage
        localStorage.setItem("access_token", response.data.access_token);
  
        console.log("Login successful:", response.data);
        alert("Login successful!");  // Display success message
        window.location.href = "/dashboard";  // Redirect to the dashboard
      } else {
        // Handle missing access token in response
        setErrorMessage("Login failed. Invalid credentials.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(error.response ? error.response.data.error : "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white shadow-lg rounded-lg p-8">
          <div>
            <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
              Or{" "}
              <a href="/register" className="font-medium text-teal-600 hover:text-teal-500">
                create a new account
              </a>
            </p>
          </div>

          {/* Error message */}
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">
              <p>{errorMessage}</p>
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>

              {/* Password Field */}
              <div className="mt-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}  // Disable button while loading
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                {loading ? (
                  <span>Loading...</span> // Show loading text when submitting
                ) : (
                  <span>Sign in</span> // Normal button text
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
