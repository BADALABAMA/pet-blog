import React, { useEffect, useState } from 'react';

import { getProducts } from '../utills/constants';
import { IProduct } from '../interfaces/IProduct';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products.products);
    };
    fetchData();
  }, []);

  const productCategory = [
    ...new Set(products.map((product: IProduct) => product.category)),
  ];
  const productImage = [
    ...new Set(products.map((product: IProduct) => product.images)),
  ];

  console.log(productCategory);
  return (
    <div className="grid-container category-page">
      {productCategory.map((category, index) => (
        <div>
          {' '}
          <Link key={index} to="">
            {category}
          </Link>
          <img src="" alt="" />
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
