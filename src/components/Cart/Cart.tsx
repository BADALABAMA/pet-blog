import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { calculatePrice } from '../../utills/constants';

import { Card } from 'react-bootstrap';

const Cart = () => {
  const { productCart } = useContext(CartContext);

  return (
    <div>
      <div className="total-price-wrapper">
        {productCart.length > 0 && (
          <Card.Text key={Math.random()} className="product-price">
            Total: {calculatePrice(productCart)} $
          </Card.Text>
        )}
      </div>
      {productCart.map((product, index) => {
        return (
          <div className="container mb-3 " key={index}>
            <div key={product.id} className="product-card row  ">
              {product.images && product.images.length > 0 && (
                <img
                  className="product-img w-50 h-50"
                  src={product.images[0]}
                  alt={product.images[1]}
                />
              )}
              <div className="product-info  col">
                <div className="product-text">
                  <h1 className="product-title">{product.title}</h1>
                  <p className="product-price">{product.price} $</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
