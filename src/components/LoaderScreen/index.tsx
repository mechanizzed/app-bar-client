import { BiLoaderAlt } from 'react-icons/bi';

// props
import { LoaderScreenPropsComponent } from './types/loaderScreen.types';

// context
import { useLoaderScreen } from './context/useLoaderScreen';

export const LoaderScreen = ({ isOpen }: LoaderScreenPropsComponent) => {
  const { open } = useLoaderScreen();
  const finalOpen = !isOpen ? open : isOpen;

  return (
    <>
      {finalOpen && (
        <div className="w-full h-screen m-0 fixed top-0 left-0 p-0 z-50 bg-white/90">
          <div className="flex justify-center items-center h-screen">
            <BiLoaderAlt
              className="animate-spin text-sky-600 m-auto"
              size={64}
            />
          </div>
        </div>
      )}
    </>
  );
};
