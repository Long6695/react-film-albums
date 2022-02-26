import React from 'react';
import { Navigate } from 'react-router-dom';

// helpers
import { checkAuth } from '../helpers/auth';

const AuthGuards = ({ children }) => {
  console.log('abc: ')
  const isAuth = checkAuth();
  if (!isAuth) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default AuthGuards;
