import { create } from 'zustand';
import { ProductsContextProps } from '../types/products.types';

export const useProducts = create(
  () =>
    ({
      products: [],
    } as ProductsContextProps),
);
