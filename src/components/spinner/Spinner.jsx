
import React from 'react';
import '../../main.css';

const Spinner = ({ size = 'large' }) => {
  return (
    <div className="fullscreen-spinner-wrapper">
      <div className={`spinner ${size}`} />
    </div>
  );
};

export default Spinner;
