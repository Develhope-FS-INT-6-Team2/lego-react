import React, { useState } from 'react';
import accountLogo from "../login-page/images/account.svg"
import avatarLogo from "../login-page/images/avatar.png"
import "./registerpage.css"

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [dobError,setDobError]= useState('');
  const handleBlur = (event) => {
    const name = event.target.name;
    if (name === 'email') {
      setEmailTouched(true);
    } else if (name === 'password') {
      setPasswordTouched(true);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'email') {
        setEmail(value);
        if (!value) {
          setEmailError('The email address is required');
        } else if (!validateEmail(value)) {
          setEmailError('The email address is not valid');
        } else {
          setEmailError('');
        }
    } else if (name === 'password') {
      setPassword(value);
      if (!value) {
        setPasswordError('The password is required');
      } else if (value.length < 10) {
        setPasswordError('The password must be at least 10 characters long');
      } else {
        setPasswordError('');
      }
    }
  };
  const handleFocus = (event) => {
    const name = event.target.name;
    if (name === 'email' && !email) {
      setEmailError('The email address is required');
    } else if (name === 'password' && (!password || password.length < 10)) {
      setPasswordError('The password must be at least 10 characters long');
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const countries = ['Country A', 'Country B', 'Country C'];
  
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const currentDate = new Date();
    const dobDate = new Date(`${year}-${month}-${day}`);
    const ageDiff = currentDate.getFullYear() - dobDate.getFullYear();
    const isUnderage = ageDiff < 18;
  
    if (isUnderage) {
     setDobError('You must be at least 18 years old to register.');
      return;
    }

    // Continue with the registration process if not underage
    // ...

    setEmail('');
    setPassword('');
    setCountry('');
    setDay('');
    setMonth('');
    setYear('');
    setDobError('');
  };

  return (
    <div className='login-page'>
      <header className='header'>
        <img className='login-account-logo' src={accountLogo} alt="Account Logo" />
      </header>

      <div className='main'>
        <h1> Create your adult LEGO® Account</h1>
        <div className='create-section'>
          <p>Already have an account?</p>
          <a href=''>Log in</a>
        </div>

        <div className="buttons-container">
          <button className="facebook-button">Continue with Facebook</button>
          <button className="google-button">Continue with Google</button>
          <button className="apple-button">Continue with Apple</button>
        </div>

        <div className="breaker">
          <hr className="breaker-line" />
          <span className="breaker-or">Or</span>
          <hr className="breaker-line" />
        </div>

        <div>
          <img className='avatar-logo' src={avatarLogo} alt="Avatar Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            {emailTouched && emailError  && (
              <p className='error-message'>{emailError}</p>
              
            )}
          </label>
          <br />
          <label>
            Password:
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
            {passwordTouched && passwordError && (
              <p className='error-message'>{passwordError}</p>
            )}
          </label>
          <br />
          <label>
            Country:
            <select value={country} onChange={(e) => setCountry(e.target.value)} required>
              <option value="">Select Country</option>
              {countries.map((countryOption) => (
                <option value={countryOption} key={countryOption}>
                  {countryOption}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Date of Birth:
            <input type="text" value={day} pattern="[0-9]*" placeholder="DD" onChange={(e) => setDay(e.target.value)} required maxLength={2} />
            <input type="text" value={month} pattern="[0-9]*" placeholder="MM" onChange={(e) => setMonth(e.target.value)} required maxLength={2} />
            <input type="text" value={year}pattern="[0-9]*"  placeholder="YYYY" onChange={(e) => setYear(e.target.value)} required maxLength={4} />
            
          </label>
          {dobError && <p className='error-message'>{dobError}</p>}
          <br />
          <label>
            <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} required />
            I accept the terms and conditions.
          </label>
          <br />
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
