import React, { PropsWithChildren, createContext, useState } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { ICartContextType } from '../interfaces/ContextTypes';

const CartContext = createContext<ICartContextType>({
  productCart: [],

  addToCart: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
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
