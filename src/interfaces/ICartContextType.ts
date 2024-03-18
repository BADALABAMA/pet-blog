import { IProduct } from './IProduct';

export interface ICartContextType {
  productCart: IProduct[];
  addToCart: (product: IProduct) => void;
}
