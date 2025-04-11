"use client";
import React, { useState, useEffect } from "react";
import api from "../api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [fullName, setFullName] = useState(null); // Track loading state  

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("Token is missing or invalid.");
        setIsLoading(false);
        return;
      }
      const response = await api.get("/user/profile/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsername(response.data.username);
      setFullName(response.data.full_name); // Set full name from response
    } catch (err) {
      setError("Failed to fetch user data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-10 px-6 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Welcome back, <span className="text-teal-500">{fullName}</span> 
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Here’s what’s happening in your coding journey.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm text-gray-800 dark:text-white"
            >
              {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card title="Code Executions" value="145" color="teal" />
          <Card title="Languages Used" value="5" color="purple" />
          <Card title="Success Rate" value="89%" color="indigo" />
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-12">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Your Weekly Activity
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="day" stroke="#8884d8" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                  color: darkMode ? "#f9fafb" : "#1f2937",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
                labelStyle={{ color: "#6b7280", fontWeight: "bold" }}
              />
              <Bar dataKey="runs" fill="#14b8a6" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-12">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>✅ Python - Bubble Sort - Success - 5 mins ago</li>
            <li>❌ JavaScript - Merge Arrays - Error - 20 mins ago</li>
            <li>✅ Java - Login Module - Success - 1 hour ago</li>
          </ul>
        </section>

        <section className="text-center">
          <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-lg rounded-lg shadow">
            ➕ Start New Code Session
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

const Card = ({ title, value, color }) => {
  const colorMap = {
    teal: "text-teal-600",
    indigo: "text-indigo-600",
    purple: "text-purple-600",
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className={`text-lg font-semibold ${colorMap[color]} mb-1`}>{title}</h3>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  );
};

const chartData = [
  { day: "Mon", runs: 4 },
  { day: "Tue", runs: 2 },
  { day: "Wed", runs: 6 },
  { day: "Thu", runs: 3 },
  { day: "Fri", runs: 5 },
  { day: "Sat", runs: 1 },
  { day: "Sun", runs: 4 },
];

export default Dashboard;
