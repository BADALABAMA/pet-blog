import React, { PropsWithChildren, createContext, useState } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { IProductContextType } from '../interfaces/ContextTypes';

const ProductContext = createContext<IProductContextType>({
  product: {},
  seeDetails: () => {},
});

const ProductProvider = ({ children }: PropsWithChildren) => {
  const [product, setProduct] = useState<IProduct>({});
  const seeDetails = async (product: IProduct) => {
    setProduct(product);
  };

  return (
    <ProductContext.Provider value={{ product, seeDetails }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
