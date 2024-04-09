import React from 'react';
import './Spinner.css';

interface SpinnerProps {
  isVisible: boolean;
}

export const Spinner = ({ isVisible }: SpinnerProps) => {
  return isVisible ? (
    <div className="backdrop">
      <div className="spinner-container">
        <div className="loader"></div>
      </div>
    </div>
  ) : null;
};
