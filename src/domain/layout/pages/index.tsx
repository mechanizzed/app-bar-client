import { Outlet } from 'react-router-dom';

// components
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Layout = () => {
  return (
    <div className="bg-slate-100 w-full min-h-screen flex flex-col">
      <Header />
      <main className="m-auto w-full p-6 xl:w-2/3 lg:w-2/3 md:w-2/3 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
