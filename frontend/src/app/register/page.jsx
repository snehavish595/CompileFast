"use client"; // Ensure this is a client-side component

import React, { useState } from "react"; // Import useState
import api from "../api"; // Axios instance
import Footer from "../components/Footer"; // Import Footer component
import Navbar from "../components/Navbar"; // Import Navbar component

const Register = () => {
  const [username, setUsername] = useState(""); // Initialize username state
  const [email, setEmail] = useState(""); // Initialize email state
  const [password, setPassword] = useState(""); // Initialize password state
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState(""); // Track loading state
  const [errorMessage, setErrorMessage] = useState(""); // Store error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Reset previous error message

    // Validate form fields before sending request
    if (!username || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("/register/", {
        username,
        email,
        password,
        full_name: fullName, // Include full name in the request
      });
      console.log("Registration successful:", response.data);
      alert("Registration successful! Please log in.");
      // Optionally, redirect to the login page after successful registration
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage(
        error.response
          ? error.response.data
          : "Registration failed. Please try again."
      );
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
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
              Or{" "}
              <a
                href="/login"
                className="font-medium text-teal-600 hover:text-teal-500"
              >
                sign in to your account
              </a>
            </p>
          </div>
          {/* Error message */}
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">
              <p>{errorMessage}</p>
            </div>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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

              <div className="mt-4">
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>

              {/* Email Field */}
              <div className="mt-4">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Email address"
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
                disabled={loading} // Disable button when loading
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent cursor-pointer text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                {loading ? (
                  <span>Loading...</span> // Show loading text
                ) : (
                  <span>Sign up</span> // Normal text when not loading
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

export default Register;
