import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/page-components/HomePage/HomePage';
import LoginForm from "./components/login-page/LoginPage";
import RegisterForm from './components/RegisterPage/RegisterPage';


function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginForm />} />
          <Route path="/RegisterPage" element={<RegisterForm/>}/>
        </Routes>
        
      </div>
    </Router>
  )
}

export default App;

