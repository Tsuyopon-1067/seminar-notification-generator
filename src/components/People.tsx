import { usePresetType } from '@/hooks/usePresets';
import { Person } from './Person';

type PeopleProps = {
  presets: usePresetType;
  onAdd: () => void;
};

export const People = ({ presets, onAdd }: PeopleProps) => {
  const people = presets.presets.find((p) => p.id === presets.currentPreset)?.people || [];
  return (
    <div className="flex flex-col gap-2 w-full max-w-4xl p-4">
      {presets.presets.length === 0 ? (
        <div className="text-gray-500 text-sm text-center py-4">No items available</div>
      ) : (
        people.map((p) => (
          <Person
            key={p.id}
            name={p.name}
            url={p.url}
            onEdit={(name) => presets.editPerson(presets.currentPreset, p.id, name, p.url)}
            onDelete={() => presets.deletePerson(presets.currentPreset, p.id)}
            onUrlChange={(url) => presets.editPerson(presets.currentPreset, p.id, p.name, url)}
          />
        ))
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
