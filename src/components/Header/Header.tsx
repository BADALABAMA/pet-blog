import React, { useState } from 'react';
import { onClick } from '../../utills/constants';

import './Header.css';
import Logo from '../Logo/Logo';

const Header = ({ petNameFilter, setPetNameFilter }: any) => {
  const handleNameChange = (event: any) => {
    setPetNameFilter(event.target.value);
  };

  return (
    <header className="header">
      <Logo></Logo>
      <div className="input-wrapper">
        <input
          type="text"
          name="petNameFilter"
          value={petNameFilter}
          onChange={handleNameChange}
          placeholder="Search by pet name..."
        />
      </div>

      <nav className="nav" onClick={onClick}>
        <a className="nav-btn" href="/">
          HOME
        </a>
        <a className="nav-btn" href="/">
          CART
        </a>
        <a className="nav-btn" href="/">
          CATALOG
        </a>
        <button className="nav-btn">LOGIN</button>
      </nav>
    </header>
  );
};

export default Header;
