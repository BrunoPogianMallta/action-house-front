// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

const ProtectedRoute = ({ element }) => {
  const { token } = useAuth();
    
  return token ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
