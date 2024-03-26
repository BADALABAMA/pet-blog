import { Link } from 'react-router-dom';
import { onClick } from '../../utills/constants';
import './Navigation.css';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';
import { IUser } from '../../interfaces/IUser';

export const Navigation = (): ReactElement => {
  const [user, setUser] = useState<IUser>();
  const { productCart } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className="navigation">
      <nav className="nav navbar navbar-light" onClick={onClick}>
        {currentUser.isAuthorized ? (
          <Link
            className="nav-btn btn btn-outline-success  bg-light"
            to="/profile"
          >
            PROFILE
          </Link>
        ) : (
          <Link className="nav-btn btn btn-outline-success  bg-light" to="/">
            HOME
          </Link>
        )}

        <Link className="nav-btn btn btn-outline-success  bg-light" to="/login">
          LOGIN
        </Link>
        <Link className="nav-btn btn btn-outline-success  bg-light" to="/cart">
          CART
        </Link>
        {productCart.length !== 0 ? (
          <p className="cart-count">{productCart.length}</p>
        ) : null}
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
