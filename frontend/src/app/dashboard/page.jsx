"use client";
import React, { useState, useEffect } from "react";
import api from "../api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get("/user/profile/");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Failed to fetch user data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1>Welcome, {userData.username}</h1>
        <div>
          <h2>Email: {userData.email}</h2>
          {userData.profile_picture && (
            <img src={userData.profile_picture} alt="Profile" />
          )}
          <p>Bio: {userData.bio}</p>
        </div>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
