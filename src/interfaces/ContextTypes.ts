import { IProduct } from './IProduct';
import { IUser } from './IUser';

export interface ICartContextType {
  productCart: IProduct[];

  addToCart: (product: IProduct) => void;
}

export interface IProductContextType {
  product: IProduct;
  productCompare: IProduct[];
  favouriteProducts: IProduct[];
  addToFavourite: (product: IProduct) => void;
  addToCompare: (product: IProduct) => void;
  seeDetails: (product: IProduct) => void;
}

export interface UserContextType {
  users: IUser[];
  currentUser: IUser;
  addUser: (user: IUser) => void;
}
