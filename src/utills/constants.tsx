import { v4 as uuidv4 } from 'uuid';
import { IProduct } from '../interfaces/IProduct';

export const DEFAULT_SOCIAL_MEDIA = [
  {
    id: uuidv4(),
    title: 'Instagram',
    link: 'https://www.instagram.com/athena_and_peach/',
  },
  {
    id: uuidv4(),
    title: 'TikTok',
    link: 'https://www.tiktok.com/@athena_and_peach',
  },
];

export const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  return data;
};

export const calculatePrice = (products: IProduct[]) => {
  return products.reduce((total, product) => total + product.price!, 0);
};

export const onClick = (e: any) => {
  e.preventDefault();
};
