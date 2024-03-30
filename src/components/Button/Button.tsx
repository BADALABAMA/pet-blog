import React from 'react';
import './Button.css';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
}
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled,
  type,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
