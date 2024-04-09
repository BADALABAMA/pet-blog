import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import { Button } from '../components/Button/Button';

import { IProduct } from '../interfaces/IProduct';

const ProductPage = () => {
  const { product } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const handleBuyClick = (product: IProduct) => {
    addToCart(product);
  };

  return product ? (
    <div key={product.id} className="product-card">
      {product.images && product.images.length > 0 && (
        <img
          className="product-img"
          src={product.images[0]}
          alt={product.images[1]}
        />
      )}
      <div className="product-info">
        <div className="product-text">
          <h1 className="product-title">{product.title}</h1>

          <h2 className="product-description">{product.description}</h2>

          <p className="product-price">{product.price} $</p>
        </div>
        <Button className="btn" onClick={() => handleBuyClick(product)}>
          Buy
        </Button>
      </div>
    </div>
  ) : null;
};

export default ProductPage;
