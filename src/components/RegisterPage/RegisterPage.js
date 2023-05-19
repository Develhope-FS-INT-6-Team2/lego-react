import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import accountLogo from "../login-page/images/account.svg"
import avatarLogo from "../RegisterPage/Register_pics/lego_desk.png"
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

  const countries = [ "Australia","Brazil","Canada","Denmark","France","Germany",
  "Italy","Japan","Mexico","New Zealand", "Spain", "Turkey", "United Kingdom", "United States",];
  
  
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
    <div className="register-page">
      <header className="header">
        <img
          className="login-account-logo"
          src={accountLogo}
          alt="Account Logo"
        />
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
          <img className="desk-logo" src={avatarLogo} alt="Avatar Logo" />
        </div>

        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-register">
            <label className="input-register-info">Email: </label>
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
            {emailTouched && emailError && (
              <p className="error-message">{emailError}</p>
            )}
          </div>
          <br />
          <div className="input-register">
            <label className="input-register-info">Password: </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            {passwordTouched && passwordError && (
              <p className="error-message">{passwordError}</p>
            )}
          </div>
          <br />
          <div className="input-register">
            <label className="input-register-info">Where do you live? </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="">Select Country</option>
              {countries.map((countryOption) => (
                <option value={countryOption} key={countryOption}>
                  {countryOption}
                </option>
              ))}
            </select>
          </div>

          <label className="dob-title">Your date of birth</label>

          <div className="dob-form">
            <div className="dob-section">
              <label className="dob-subtitle">Day</label>
              <input
                className="input-dob"
                type="text"
                value={day}
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="DD"
                onChange={(e) => setDay(e.target.value.replace(/\D/, ""))}
                required
                maxLength={2}
              />
            </div>
            <div className="dob-section">
              <label className="dob-subtitle">Month</label>
              <input
                className="input-dob"
                type="text"
                value={month}
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="MM"
                onChange={(e) => setMonth(e.target.value.replace(/\D/, ""))}
                required
                maxLength={2}
              />
            </div>

            <div className="dob-section">
              <label className="dob-subtitle">Year</label>
              <input
                className="input-dob"
                type="text"
                value={year}
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="YYYY"
                onChange={(e) => setYear(e.target.value.replace(/\D/, ""))}
                required
                maxLength={4}
              />
            </div>

            {dobError && <p className="error-message">{dobError}</p>}
          </div>

          <br />

          <div className="terms">
            <label>
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                required
              />
              I accept the terms and conditions.{" "}
            </label>
            <div className="terms-content">
              <p>
                When you agree to the <a href="">Terms and Conditions</a> you
                also consent to our use of your personal information to process
                and operate your LEGO® Account. To see how to control your
                personal data, please see our privacy policy.
              </p>
            </div>
          </div>

          <br />
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
