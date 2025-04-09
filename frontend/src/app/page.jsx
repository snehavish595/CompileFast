"use client"; // Ensure this is a client-side component

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Correct import for Navigate
import Register from "./components/Register";
import Home from "./home/page";
import Login from "./components/Login";  // Ensure Login component is imported correctly
import ProtectedComponent from "./components/ProtectedComponent"; // Import ProtectedComponent

const App = () => {
  const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />  {/* Correct /login route */}
        <Route
          path="/protected"
          element={token ? <ProtectedComponent /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
