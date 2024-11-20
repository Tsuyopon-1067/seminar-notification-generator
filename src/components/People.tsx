import { Person, PersonProps } from './Person';

type PeopleProps = {
  names: (PersonProps & { id: string })[];
  onAdd: () => void;
};

export const People = ({ names, onAdd }: PeopleProps) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-4xl p-4">
      {names.length === 0 ? (
        <div className="text-gray-500 text-sm text-center py-4">No items available</div>
      ) : (
        names.map((item) => <Person key={item.id} {...item} />)
      )}
      <button
        onClick={onAdd}
        className="mt-2 w-full h-10 border-2 border-dashed border-gray-300 rounded-lg
                 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200
                 flex items-center justify-center group"
      >
        <span className="text-2xl text-gray-400 group-hover:text-blue-500 transition-colors">
          ＋
        </span>
      </button>
    </div>
  );
};
