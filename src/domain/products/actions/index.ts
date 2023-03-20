import { api } from '../../../infra/http';

// Context
import { useProducts } from '../../../store';

export const getProductsByCategory = async (
  idCategory: number | string | undefined,
) => {
  const { data } = await api.get(`/products/${idCategory}/list`);
  useProducts.setState({ products: data });
  return data;
};
