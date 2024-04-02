import React from 'react';
import './Trusted.css';
import trusted from '../../../assets/Trust_Badges_Icon-2.svg';

const Trusted = () => {
  return (
    <div className='trusted-container'>
      <img src={trusted} className='trusted-icon' alt='trusted-icon' />
      {/* <span className='trusted-text'>TRUSTED</span> */}
      <span className='trusted-description'>Trusted</span>
    </div>
  );
};

export default Trusted;
