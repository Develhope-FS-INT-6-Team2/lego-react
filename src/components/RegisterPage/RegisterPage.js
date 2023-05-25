import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountLogo from '../login-page/images/account.svg';
import AvatarLogo from '../RegisterPage/Register_pics/lego_desk.png';
import './registerpage.css';
import RegistrationForm from './childComponents/RegistrationFrom';

function RegisterForm() {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [error, setError] = useState(null);

  const handleRegistration = (user) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const userExists = existingUsers.some(
      (existingUser) => existingUser.email === user.email
    );

    if (userExists) {
      setError('User with this email already exists.');
      return;
    }

    // Add the new user to the existing users array
    existingUsers.push(user);

    // Save the updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    setRegisteredUser(user);
    setError(null);
  };

  return (
    <div className="register-page">
      <header className="header">
        <img className="login-account-logo" src={AccountLogo} alt="Account Logo" />
      </header>

      <div className="main">
        <h1> Create your adult LEGO® Account</h1>
        <div className="create-section-register">
          <p>Already have an account?</p>
          <Link to="/LoginPage">Log in</Link>
        </div>

        <div className="buttons-container">
          <button className="facebook-button-icon"></button>
          <button className="google-button-icon"></button>
          <button className="apple-button-icon"></button>
        </div>

        <div className="breaker">
          <hr className="breaker-line" />
          <span className="breaker-or">Or use your email</span>
          <hr className="breaker-line" />
        </div>

        <div className="image-container">
          <img className="desk-logo" src={AvatarLogo} alt="Avatar Logo" />
        </div>

        <RegistrationForm
          onRegistration={handleRegistration}
          registeredUser={registeredUser}
          error={error}
        />
      </div>
    </div>
  );
}

export default RegisterForm;
