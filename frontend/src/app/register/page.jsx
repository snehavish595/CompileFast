"use client";  // Ensure this is a client-side component

import React, { useState } from "react";  // Import useState
import api from "../api";  // Axios instance

const Register = () => {
  const [username, setUsername] = useState("");  // Initialize username state
  const [email, setEmail] = useState("");  // Initialize email state
  const [password, setPassword] = useState("");  // Initialize password state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/register/", {
        username,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      alert(response.data.message);  // Display success message
    } catch (error) {
      alert("Registration failed:", error.response.data);  // Display error message
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}  // Update username state
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Update email state
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Update password state
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
