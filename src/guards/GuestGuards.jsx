import React from 'react';
import { Navigate } from 'react-router-dom';

// helpers
import { checkAuth } from '../helpers/auth';

const GuestGuard = ({ children }) => {
  const isAuth = checkAuth();
  
  if (isAuth) return <Navigate to="/" />;

  return <>{children}</>;
};

export default GuestGuard;
