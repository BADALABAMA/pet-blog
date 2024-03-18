import React, { createContext, useState } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { ICartContextType } from '../interfaces/ICartContextType';

const CartContext = createContext<ICartContextType>({
  productCart: [],
  addToCart: () => {},
});

const CartProvider = ({ children }: any) => {
  const [productCart, setProductCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setProductCart([...productCart, product]);
    console.log(productCart);
  };

  return (
    <CartContext.Provider value={{ productCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
