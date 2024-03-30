import { Link } from 'react-router-dom';
import { onClick } from '../../utills/constants';

import { ReactElement, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';
import { IUser } from '../../interfaces/IUser';
import { Button } from '../Button/Button';

import './Navigation.css';

export const Navigation = (): ReactElement => {
  const [user, setUser] = useState<IUser>();
  const { productCart } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className="navigation">
      <nav className="nav navbar navbar-light " onClick={onClick}>
        {currentUser.isAuthorized ? (
          <Button className="m-3">
            <Link to="/profile">PROFILE</Link>
          </Button>
        ) : (
          <Button className="m-3">
            <Link to="/">HOME</Link>
          </Button>
        )}
        {!currentUser.isAuthorized ? (
          <Button className="m-3">
            <Link to="/login">LOGIN</Link>
          </Button>
        ) : (
          <Button>
            <Link to="/cart">
              <div>
                Cart{' '}
                {productCart.length !== 0 && currentUser.isAuthorized ? (
                  <div className="count">{productCart.length}</div>
                ) : null}
              </div>
            </Link>
          </Button>
        )}

        <Button className="m-3">
          <Link to="/category">CATEGORY</Link>
        </Button>
        <Button className="m-3">
          <Link to="/products">PRODUCTS</Link>
        </Button>
      </nav>
    </div>
  );
};

export default Navigation;
