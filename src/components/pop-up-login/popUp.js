import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './popUp.css';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => {
    setIsOpen(true);
    document.addEventListener('click', handleOverlayClick);
  };

  const closePopup = () => {
    setIsOpen(false);
    document.removeEventListener('click', handleOverlayClick);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      closePopup();
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  }, []);

  return (
    <div className="popup-container">
      <a onClick={openPopup} className="open-button">
        <img
          src="../assets/icons/header/account-icon.png"
          height="36"
          width="36"
          alt="Account"
        />
        <span className='span-open-button'>Account</span>
      </a>
      {isOpen && (
        <div className="popup-overlay">
          <div className={`popup ${isOpen ? "open" : "closed"}`} ref={popupRef}>
            <div className="popup-content">
              <div className="title-content">
                <div>
                  <img
                    className="lego-icon"
                    src={`${process.env.PUBLIC_URL}/assets/icons/popup/lego.png`}
                    alt="Lego"
                  ></img>
                </div>
                <div>
                  <h2>Sign In to your LEGO® Account</h2>
                </div>
              </div>
              <div>
                <button onClick={closePopup} className="close-button">
                  {" "}
                  <img
                    className="close-icon"
                    src={`${process.env.PUBLIC_URL}/assets/icons/popup/vector-cross.png`}
                    alt="Close"
                  ></img>
                </button>
              </div>
              <Link to='/LoginPage' className='signin'> Sign In</Link>
              <div className='register'>
                <p>Don't have an account? </p> <Link to='/RegisterPage'> Register </Link>
              </div>
              <div className='status'>
                <img className='truck' src={`${process.env.PUBLIC_URL}/assets/icons/popup/orderstatus.png`} alt="order status" />
                <a>Check Order Status</a>
              </div>
              <div className='vip'>
                <img className='vip-icon' src={`${process.env.PUBLIC_URL}/assets/icons/popup/vip.png`} alt="vip" />
                <div className='vip-content'>
                  Become a LEGO® VIP member
                  <a>LEGO® VIP rewards</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
