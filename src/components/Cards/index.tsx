import { CardProps } from './cards.types';

export const Cards = ({ children }: CardProps) => {
  return (
    <div className="p-4 bg-white border border-slate-300 rounded-md mx-auto my-4 w-full">
      {children}
    </div>
  );
};
