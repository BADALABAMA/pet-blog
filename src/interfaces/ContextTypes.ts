import { IProduct } from './IProduct';
import { IUser } from './IUser';

export interface ICartContextType {
  productCart: IProduct[];

  addToCart: (product: IProduct) => void;
}

export interface UserContextType {
  users: IUser[];
  currentUser: IUser;
  addUser: (user: IUser) => void;
}
