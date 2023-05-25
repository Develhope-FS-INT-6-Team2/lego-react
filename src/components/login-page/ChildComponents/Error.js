import React from 'react';

const Error = ({ error }) => {
  return error && <p className='error-message'>{error}</p>;
};

export default Error;