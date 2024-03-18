import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { calculatePrice } from '../../utills/constants';

import { Card } from 'react-bootstrap';

import './Cart.css';

const Cart = () => {
  const { productCart } = useContext(CartContext);

  return (
    <div className="cart-wrapper">
      {productCart.map((product) => {
        return (
          <div>
            {' '}
            <Card key={product.id} className="product-in-cart">
              <Card.Body>
                {product.images && product.images.length > 0 && (
                  <Card.Img
                    className="product-img"
                    src={product.images[0]}
                    alt=""
                  />
                )}
                <Card.Title>Title: {product.title}</Card.Title>
                <Card.Subtitle>Price: {product.price}$</Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      <div className="total-price-wrapper">
        {productCart.length > 0 && (
          <Card.Text key={Math.random()} className="total-price">
            Total: {calculatePrice(productCart)} $
          </Card.Text>
        )}
      </div>
    </div>
  );
};

export default Cart;
