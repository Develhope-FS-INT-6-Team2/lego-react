import React, { createContext, useState } from 'react';

// Create the LoginContext
export const LoginContext = createContext();

// Create the LoginProvider component
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic here
    alert("logout");
    localStorage.removeItem('username'); // Remove username from local storage
    localStorage.removeItem('password'); // Remove password from local storage
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, username, password, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};