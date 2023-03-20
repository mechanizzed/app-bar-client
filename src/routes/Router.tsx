import { Routes, Route } from 'react-router-dom';

// Layout
import { Layout } from '../domain/layout/pages';

// Pages
import { Categories } from '../domain/categories/pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="main" element={<Layout />}>
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
};
