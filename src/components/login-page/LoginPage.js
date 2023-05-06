import React, { useState } from 'react';
import accountLogo from "./images/account.svg"
import avatarLogo from "./images/avatar.png"
import "./LoginPage.css"

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

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
    } else if (name === 'password') {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login logic here using username, password, and rememberMe state values
  };

  return (
    <div className='login-page'>
      <header className='header'>
        <img className='login-account-logo' src={accountLogo} />
      </header>

      <div className='main'>
        <div>
          <img className='avatar-logo' src={avatarLogo} />
        </div>

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
          <div className='remember-me-checkbox'>

            <div className='remember-me-innerbox'>
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)} />

              <p id="remember-text">Remember me</p>
            </div>

          </div>

          <div className='reminder'>
            <p class="centered">Remember to log out afterwards if you’re using a shared computer, for example in a library or school.</p>
          </div>

          <button
            type="submit"
            className='login-button'
          >Log in</button>


          <div className='help-section'>
            <a href="#">Forgot username?</a>
            <span className='help-section-breaker'></span>
            <a href="#">Forgot password?</a>
          </div>

          <div className='create-section'>
            <p>Don’t have a LEGO® Account?</p>
            <a href=''>Create account</a>
          </div>
        </form>
        <div class="breaker">
          <hr class="breaker-line" />
          < span class="breaker-or">Or</span>
          <hr class="breaker-line" />
        </div>





        <div class="buttons-container">
          <button class="facebook-button">Continue with Facebook</button>
          <button class="google-button">Continue with Google</button>
          <button class="apple-button">Continue with Apple</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
