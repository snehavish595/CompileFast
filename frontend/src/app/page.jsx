import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./dashboard/page";
import Home from "./home/page";
import ProtectedRoute from "./components/PrivateRoute";  // Your private route component

const App = () => {
  const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            token ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/protected" element={<ProtectedRoute />} />
      </Routes>
    </Router>
  );
};

export default App;
