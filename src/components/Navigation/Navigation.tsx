import { Link } from 'react-router-dom';
import { onClick } from '../../utills/constants';
import './Navigation.css';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const Navigation = (): ReactElement => {
  const { productCart } = useContext(CartContext);
  return (
    <div className="navigation">
      <nav className="nav navbar navbar-light" onClick={onClick}>
        <Link className="nav-btn btn btn-outline-success  bg-light" to="/">
          HOME
        </Link>
        <Link className="nav-btn btn btn-outline-success  bg-light" to="cart">
          CART
        </Link>
        <p>{productCart.length}</p>
        <Link
          className="nav-btn btn btn-outline-success  bg-light"
          to="/category"
        >
          CATEGORY
        </Link>
        <Link
          className="nav-btn  btn btn-outline-success  bg-light"
          to="/products"
        >
          PRODUCTS
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
