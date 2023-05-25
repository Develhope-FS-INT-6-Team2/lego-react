import React, { createContext, useState } from 'react';

// Create the LoginContext
export const LoginContext = createContext();

// Create the LoginProvider component
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const login = (id) => {
    // Perform login logic here
    localStorage.setItem('userId', id);
    setIsLoggedIn(true);
    setUserId(id);
  };

  const logout = () => {
    alert('You have logged out');
    
    localStorage.removeItem('userId'); // Remove userId from local storage
    setIsLoggedIn(false);
    setUserId('');
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};