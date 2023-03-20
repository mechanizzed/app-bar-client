import { api } from '../../../infra/http';

// Context
import { useCategories } from '../../../store';

// Types
import { CategoriesContentProps } from '../types/categories.types';

export const getCategories = async () => {
  const { data } = await api.get('/categories');
  useCategories.setState({ categories: data });
  return data;
};
