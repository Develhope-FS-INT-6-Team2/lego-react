import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/page-components/HomePage/HomePage';
import ProductPage from './components/page-components/ProductPage/ProductPage';

import LoginForm from "./components/login-page/LoginPage";


function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginForm />} />
          <Route path="/product/:id" element={<ProductPage/>} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App;

