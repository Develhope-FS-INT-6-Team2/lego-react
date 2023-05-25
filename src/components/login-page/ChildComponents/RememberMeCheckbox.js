const RememberMeCheckbox = ({ rememberMe, setRememberMe }) => {
    return (
      <div className='remember-me-checkbox'>
        <div className='remember-me-innerbox'>
          <input
            type="checkbox"
            id="remember-me"
            name="remember-me"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <p id="remember-text">Remember me</p>
        </div>
      </div>
    );
  };
  
  export default RememberMeCheckbox;