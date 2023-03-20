import { create } from 'zustand';

// types
import { LoaderScreenProps } from '../types/loaderScreen.types';

export const useLoaderScreen = create<LoaderScreenProps>(() => ({
  open: false,
}));
