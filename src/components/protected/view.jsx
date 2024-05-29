import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../service/api';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('/user/');
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // or a spinner/loading component
  }

  return (
    isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />
  );
};

export default ProtectedRoute;