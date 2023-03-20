import axios from 'axios';
import { toast } from 'react-toastify';
import { useLoaderScreen } from '../../store';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});

axiosClient.interceptors.request.use(
  (config: any) => {
    // const token = useAuth.getState().token;
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY29tcGFueV9pZCI6MSwiaWF0IjoxNjc5MzIzNDkxLCJleHAiOjE3MTMwMTk0OTF9.3VMTIy5l9LeBon-u8qQs-nmVft4nd9N7_SZ3EW-ryD8';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    useLoaderScreen.setState({ open: true });
    return config;
  },
  (error) => {
    useLoaderScreen.setState({ open: false });
    toast.error(`Erro: ${error}`);
    return Promise.reject(error);
  },
);

// RESPONSE
axiosClient.interceptors.response.use(
  (response) => {
    useLoaderScreen.setState({ open: false });
    return response;
  },
  (error) => {
    useLoaderScreen.setState({ open: false });
    const getError = error.response.data;

    if (getError?.error) {
      toast.error(`${error.response.data.message}`);
    } else {
      getError.errors.map((err: any) =>
        toast.warning(`${err.message}`, { theme: 'colored' }),
      );
    }

    return Promise.reject(error);
  },
);

export { axiosClient };
