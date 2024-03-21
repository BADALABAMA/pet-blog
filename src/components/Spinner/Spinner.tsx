import React from 'react';

import './Spinner.css';
export const Spinner = ({ isVisible }: any) => {
  return isVisible ? (
    <div className="backdrop">
      <div className="spinner-container">
        <div className="loader"></div>
      </div>
    </div>
  ) : null;
};
