import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/page-components/HomePage/HomePage';
import ProductPage from './components/page-components/ProductPage/ProductPage';
import LoginForm from "./components/login-page/LoginPage";
import RegisterForm from './components/RegisterPage/RegisterPage';
import { LoginProvider } from './components/context/LoginContext';
import AllProductsPage from './components/page-components/AllProductPage/AllProductsPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <LoginProvider isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LoginPage" element={<LoginForm />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/RegisterPage" element={<RegisterForm />} />
            <Route path="/all-products" element={<AllProductsPage />} />
          </Routes>
        </LoginProvider>
      </div>
    </Router>
  );
}

export default App;




