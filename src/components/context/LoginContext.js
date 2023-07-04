import React, { createContext, useState } from 'react';

// Create the LoginContext
export const LoginContext = createContext();

// Create the LoginProvider component
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const login = (email) => {
    // Perform login logic here
    localStorage.setItem('userId', email);
    setIsLoggedIn(true);
    setUserId(email);
    console.log('User ID:', email);
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


