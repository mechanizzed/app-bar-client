import { Routes, Route } from 'react-router-dom';

// Layout
import { Layout } from '../domain/layout/pages';

// Pages
import { Categories } from '../domain/categories/pages';
import { Products } from '../domain/products/pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="categories" element={<Categories />} />
        <Route
          path="categories/category/:idCategory/products"
          element={<Products />}
        />
      </Route>
    </Routes>
  );
};
