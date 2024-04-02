import React from 'react';
import './Verified.css';
import verified from '../../../assets/verified.png';

const Verified = () => {
  return (
    <div className='trusted-container'>
      <img src={verified} className='verified-icon' alt='verified-icon' />
      {/* <span className='trusted-text'>TRUSTED</span> */}
      <span className='trusted-description'>Verified</span>
    </div>
  );
};

export default Verified;
