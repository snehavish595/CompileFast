"use client";  // Ensure this is a client-side component

import React from "react";
import { Navigate } from "react-router-dom";  // Use Navigate for redirecting

// PrivateRoute to protect the route and ensure the user is authenticated
const PrivateRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/login" replace />;  // Redirect to login if not authenticated
  }

  return <Element {...rest} />;
};

export default PrivateRoute;
