import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Router } from './routes/Router';

// css global Tailwind and ReactToastify
import './assets/css/global.css';
import 'react-toastify/dist/ReactToastify.css';

// Components
import { LoaderScreen } from './components/LoaderScreen';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
      <LoaderScreen />
      <ToastContainer autoClose={4000} theme="colored" />
    </BrowserRouter>
  </React.StrictMode>,
);
