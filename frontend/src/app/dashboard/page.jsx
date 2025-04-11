"use client";
import React, { useState, useEffect } from "react";
import api from "../api";  // Your Axios instance
import Navbar from "../components/Navbar";  // Assuming you have a Navbar component
import Footer from "../components/Footer";  // Assuming you have a Footer component

const Dashboard = () => {
  const [username, setUsername] = useState(null);  // Store the username
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch the username
  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("access_token");  // Get the token from localStorage
      if (!token) {
        setError("Token is missing or invalid.");
        setIsLoading(false);
        return;
      }
  
      // Sending the token in the Authorization header
      const response = await api.get("/user/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,  // Send the token as a Bearer token
        },
      });
  
      // Set the username in state
      setUsername(response.data.username);  
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setError("Failed to fetch user data.");
    } finally {
      setIsLoading(false);  // Stop loading once the request is complete
    }
  };
  

  // Fetch user profile when the component mounts
  useEffect(() => {
    fetchUserProfile();
  }, []);  // Empty dependency array ensures this runs once on mount

  const handleLogout = () => {
    localStorage.removeItem("access_token");  // Remove the token from localStorage
    window.location.href = "/login";  // Redirect to the login page
  };

  // Show loading state while fetching data
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1>Welcome, {username}</h1> {/* Display username */}
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
