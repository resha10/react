import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with actual logic later
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
