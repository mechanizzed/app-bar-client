import { create } from 'zustand';
import { CategoriesContextProps } from '../types/categories.types';

export const useCategories = create(
  () =>
    ({
      categories: [],
    } as CategoriesContextProps),
);
