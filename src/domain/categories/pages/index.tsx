// Components
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cards } from '../../../components/Cards';

// Contexts
import { useCategories } from '../context/useCategories';

// Actions
import { getCategories } from '../actions';

export const Categories = () => {
  const { categories } = useCategories();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div>
      <h5 className="text-center text-sm">Selecione uma categoria:</h5>

      {categories.length > 0 &&
        categories.map((category) => (
          <Link key={category.id} to={`category/${category.id}/products`}>
            <Cards>
              <h4 className="font-bold text-teal-700 text-center">
                {category.a_descr}
              </h4>
            </Cards>
          </Link>
        ))}
    </div>
  );
};
