// LoginContext.js
import React, { createContext, useState, useEffect } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  const clearUser = () => {
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setUserId('');
  };

  const login = (email) => {
    localStorage.setItem('userId', email);
    setIsLoggedIn(true);
    setUserId(email);
    localStorage.setItem('cartItems', JSON.stringify([]));
    console.log('User ID:', email);
  };

  const logout = () => {
    alert('You have logged out');
    clearUser();
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
