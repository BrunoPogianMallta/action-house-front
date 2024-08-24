import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')) || null);
  const navigate = useNavigate();

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setToken(null);
    setUser(null);
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    const checkTokenExpiration = () => {
      const storedToken = localStorage.getItem('authToken');
      const storedUser = localStorage.getItem('authUser');

      if (storedToken && storedUser) {
        const tokenPayload = JSON.parse(atob(storedToken.split('.')[1]));
        const currentTime = Math.floor(Date.now() / 1000);

        if (tokenPayload.exp < currentTime) {
          logout();
          navigate('/session-expired');
        } else {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      }
    };

    checkTokenExpiration();
  }, [navigate, logout]);

  const login = (token, user) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('authUser', JSON.stringify(user));
    setToken(token);
    setUser(user);
    navigate('/dashboard');
  };

  return { token, user, login, logout };
};
