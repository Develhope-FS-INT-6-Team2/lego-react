import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import accountLogo from "./images/account.svg";

import { LoginContext } from '../context/LoginContext';
import Avatar from './ChildComponents/Avatar';
import RememberMeCheckbox from './ChildComponents/RememberMeCheckbox';
import Reminder from './ChildComponents/Reminder';
import Error from './ChildComponents/Error';
import HelpSection from './ChildComponents/HelpSection';
import CreateSection from './ChildComponents/CreateSection';
import "./LoginPage.css";

const LoginForm = () => {
  const { login } = useContext(LoginContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(null);

  const handleBlur = (event) => {
    const name = event.target.name;
    if (name === 'username') {
      setUsernameTouched(true);
    } else if (name === 'password') {
      setPasswordTouched(true);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'username') {
      setUsername(value);
      if (!value) {
        setUsernameError('This field is required');
      } else {
        setUsernameError('');
      }
    } 
    else if (name === 'password') {
      setPassword(value);
      if (!value) {
        setPasswordError('This field is required');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleFocus = (event) => {
    const name = event.target.name;
    if (name === 'username' && !username) {
      setUsernameError('This field is required');
    } else if (name === 'password' && !password) {
      setPasswordError('This field is required');
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user exists in local storage
    const storedUsers = JSON.parse(localStorage.getItem('users'));

    if (!storedUsers || storedUsers.length === 0) {
      setError('User does not exist. Please register.');
      return;
    }

    // Check if the provided username and password match any of the stored users' credentials
    const matchedUser = storedUsers.find(
      (storedUser) => storedUser.email === username && storedUser.password === password
    );

    if (!matchedUser) {
      setError('Invalid username or password.');
      return;
    }

    alert("you have logged in")
    // Login successful
    login(matchedUser.email);
    setError(null);

    navigate('/');
  };

  return (
    <div className='login-page'>
      <header className='header'>
        <img className='login-account-logo' src={accountLogo} alt='Account Logo' />
      </header>

      <div className='main'>
        <Avatar />

        <form className='form-container' onSubmit={handleSubmit}>
          <div className='input'>
            <label className='input-info' htmlFor='username'>Username</label>
            <input
              type='text'
              placeholder='Username'
              id='username'
              name='username'
              value={username}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            {usernameTouched && !username && (
              <p className='error-message'>{usernameError}</p>
            )}
          </div>

          <div className='input'>
            <label className='input-info' htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Password'
              id='password'
              name='password'
              value={password}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            {passwordTouched && !password && (
              <p className='error-message'>{passwordError}</p>
            )}
          </div>

          <RememberMeCheckbox rememberMe={rememberMe} setRememberMe={setRememberMe} />

          <Reminder />

          <button type="submit" className='login-button'>
            Log in
          </button>

          <Error error={error} />

          <HelpSection />

          <CreateSection />
        </form>

        <div className="breaker">
          <hr className="breaker-line" />
          <span className="breaker-or">Or</span>
          <hr className="breaker-line" />
        </div>

        <div className="buttons-container">
          <button className="facebook-button">Continue with Facebook</button>
          <button className="google-button">Continue with Google</button>
          <button className="apple-button">Continue with Apple</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;