import React, { ReactElement, useContext } from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { Button } from '../Button/Button';

import { getProducts } from '../../utills/constants';

import { IProduct } from '../../interfaces/IProduct';
import './ProductCard.css';
const ProductCard = (): ReactElement => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { currentUser } = useContext(UserContext);
  const { addToCart } = useContext(CartContext);
  const { seeDetails } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products.products);
    };
    fetchData();
  }, []);

  const handleBuyClick = (product: IProduct) => {
    if (currentUser.isAuthorized) {
      addToCart(product);
    } else {
      return;
    }
  };

  const handleMoreDetailsClick = (product: IProduct) => {
    seeDetails(product);

    if (product.title && product.id) {
      navigate(`/product/${product.id}/${encodeURIComponent(product.title)}`);
    }
  };

  const renderProducts = (products: IProduct[]) => {
    return (
      <div className="grid-container">
        {products.map((product: IProduct) => (
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
                {product.description && (
                  <h2 className="product-description">
                    {product?.description.split(' ').slice(0, 10).join(' ')}
                  </h2>
                )}

                <p className="product-price">{product.price} $</p>
              </div>
              <Button className="btn" onClick={() => handleBuyClick(product)}>
                Buy
              </Button>
              <Button
                className="btn"
                onClick={() => handleMoreDetailsClick(product)}
              >
                More details
              </Button>
            </div>
          </div>
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
