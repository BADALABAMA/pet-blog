import React, { ReactElement, useContext, useMemo } from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { getProducts } from '../../utills/constants';

import { Button } from '../Button/Button';
import { IProduct } from '../../interfaces/IProduct';
import { Spinner } from '../Spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

import './ProductCard.css';

const ProductCard = (): ReactElement => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);
  const { addToCart, productCart } = useContext(CartContext);
  const {
    seeDetails,
    addToFavourite,
    favouriteProducts,
    addToCompare,
    productCompare,
  } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products.products);
      setIsLoading(false);
    };
    setIsLoading(true);

    fetchData();
  }, []);

  useEffect(() => {
    console.log(productCompare);
  }, [productCompare]);

  const handleBuyClick = (product: IProduct) => {
    if (currentUser.isAuthorized) {
      addToCart(product);
    } else {
      return;
    }
  };

  const handleCompareClick = (product: IProduct) => {
    addToCompare(product);
  };

  const handlFavouriteClick = (product: IProduct) => {
    addToFavourite(product);
  };

  const handleMoreDetailsClick = (product: IProduct) => {
    seeDetails(product);
    if (product.title && product.id) {
      navigate(`/product/${product.id}/${encodeURIComponent(product.title)}`);
    }
  };

  const renderProducts = (products: IProduct[]) => {
    return isLoading ? (
      <Spinner isVisible></Spinner>
    ) : (
      <div className="grid-container">
        {products.map((product: IProduct) => (
          <div key={product.id} className="product-card">
            {product.images && product.images.length > 0 && (
              <img
                className="product-img"
                src={product.images[2]}
                alt={product.images[1]}
              />
            )}
            <div className="product-info">
              <div className="product-text">
                <h1 className="product-title">{product.title}</h1>
                {product.description && (
                  <h2 className="product-description">
                    {product?.description.split(' ').slice(0, 10).join(' ')}
                    {product.description.split(' ').length > 10 ? '...' : ''}
                  </h2>
                )}

                <p className="product-price">{product.price} $</p>
              </div>
              <Button className="btn" onClick={() => handleBuyClick(product)}>
                {productCart.includes(product) ? 'Product in cart' : 'Buy'}
              </Button>
              <Button
                className="btn"
                onClick={() => handleMoreDetailsClick(product)}
              >
                More details
              </Button>
              <Button
                className="btn"
                onClick={() => handleCompareClick(product)}
              >
                {productCompare.includes(product) ? 'Compared' : 'Compare'}
              </Button>
              <button
                onClick={() => {
                  handlFavouriteClick(product);
                }}
              >
                <FontAwesomeIcon
                  icon={
                    favouriteProducts.includes(product) ? faStarSolid : faStar
                  }
                />
              </button>
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
