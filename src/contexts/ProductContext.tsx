import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { IProduct } from '../interfaces/IProduct';
import { IProductContextType } from '../interfaces/ContextTypes';

const ProductContext = createContext<IProductContextType>({
  product: {},
  productCompare: [],
  favouriteProducts: [],
  seeDetails: () => {},
  addToFavourite: () => {},
  addToCompare: () => {},
});

const ProductProvider = ({ children }: PropsWithChildren) => {
  const [product, setProduct] = useState<IProduct>({});
  const [productCompare, setProductCompare] = useState<IProduct[]>([]);
  const [favouriteProducts, setFavouriteProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    console.log(favouriteProducts);
  }, [favouriteProducts]);

  const addToCompare = (product: IProduct) => {
    setProductCompare((prevProductCompare) => {
      if (prevProductCompare.includes(product)) {
        return prevProductCompare.filter((item) => item !== product);
      } else {
        return [...prevProductCompare, product];
      }
    });
  };

  const addToFavourite = (product: IProduct) => {
    setFavouriteProducts((prevFavouriteProducts) => {
      if (prevFavouriteProducts.includes(product)) {
        return prevFavouriteProducts.filter((item) => item !== product);
      } else {
        return [...prevFavouriteProducts, product];
      }
    });
  };

  const seeDetails = async (product: IProduct) => {
    setProduct(product);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        seeDetails,
        addToCompare,
        addToFavourite,
        productCompare,
        favouriteProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
