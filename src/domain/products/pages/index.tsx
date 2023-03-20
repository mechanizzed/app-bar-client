// Components
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cards } from '../../../components/Cards';

// Contexts
import { useProducts } from '../context/useProducts';

// Actions
import { getProductsByCategory } from '../actions';

export const Products = () => {
  const { idCategory } = useParams();
  const { products } = useProducts();

  useEffect(() => {
    getProductsByCategory(idCategory);
  }, [idCategory, idCategory]);

  return (
    <div>
      <h5 className="text-center text-sm">Selecione uma categoria:</h5>
      produtos
    </div>
  );
};
