"use client"; // Ensure this is a client-side component

import React, { useState } from "react";  
import api from "../api"; 
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
const jwtDecode = require("jwt-decode");

const Login = () => {
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const checkTokenExpiry = () => {
    const token = document.cookie.match(/access_token=([^;]+)/)?.[1];
    if (!token) return false;
    
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    
    if (decoded.exp < currentTime) {
      alert("Session expired. Please log in again.");
      document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; 
      window.location.href = "/login";
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); 

    if (!username || !password) {
      setErrorMessage("Please fill in both fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("/login/", { username, password });
      if (response.data && response.data.access_token) {
        // Store the access token in HttpOnly cookie
        document.cookie = `access_token=${response.data.access_token}; path=/; secure; HttpOnly; SameSite=Strict`;
        console.log("Login successful:", response.data);
        alert("Login successful!");
        window.location.href = "/dashboard"; 
      } else {
        setErrorMessage("Invalid credentials.");
      }
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.error : "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const Spinner = () => (
    <div className="spinner-border animate-spin border-4 border-teal-500 border-t-transparent w-6 h-6 rounded-full"></div>
  );

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

          {errorMessage && (
            <div className="text-red-500 text-center mb-4">
              <p>{errorMessage}</p>
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
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

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                {loading ? <Spinner /> : "Sign in"}
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
