type GreenButtonType = {
  onClick: () => void;
  children: React.ReactNode;
};
export const GreenButton = ({ onClick, children }: GreenButtonType) => {
  return (
    <button
      className={'w-full bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-4 rounded'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
