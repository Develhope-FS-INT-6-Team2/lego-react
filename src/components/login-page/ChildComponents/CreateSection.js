import React from 'react';
import { Link } from 'react-router-dom';

const CreateSection = () => {
  return (
    <div className='create-section'>
      <p>Don’t have a LEGO® Account?</p>
      <Link to='/RegisterPage'>Create account</Link>
    </div>
  );
};

export default CreateSection;