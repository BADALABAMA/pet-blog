import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { CartContext } from '../../contexts/CartContext';

import { getProducts } from '../../utills/constants';

import { IProduct } from '../../interfaces/IProduct';
import './ProductCard.css';

const ProductCard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { productCart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products.products);
    };
    fetchData();
  }, []);

  const handleBuyClick = (product: IProduct) => {
    addToCart(product);
    console.log(productCart);
  };

  const renderProducts = (products: IProduct[]) => {
    return (
      <div className="grid-container">
        {products.map((product: IProduct) => (
          <Card key={product.id} className="product-card">
            <Card.Body>
              {product.images && product.images.length > 0 && (
                <Card.Img className="image" src={product.images[0]} alt="" />
              )}
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle>{product.description}</Card.Subtitle>
              <Card.Text>{product.price} $</Card.Text>
              <Button onClick={() => handleBuyClick(product)} variant="primary">
                Buy
              </Button>{' '}
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>{renderProducts(products)}</div>
    </div>
  );
};

export default ProductCard;
