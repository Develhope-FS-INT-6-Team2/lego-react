import React from 'react';
import avatarLogo from "../images/avatar.png";

const Avatar = () => {
  return (
    <div>
      <img className='avatar-logo' src={avatarLogo} alt='Avatar Logo' />
    </div>
  );
};

export default Avatar;