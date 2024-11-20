import { PresetButton } from './PresetButton';

type PresetButtonListProps = {
  names: string[];
  deletePreset?: (name: string) => void;
  onEditName?: (oldName: string, newName: string) => void;
  onSetPreset?: (name: string) => void;
  currentPreset?: string;
};

export const PresetButtonList = ({
  names,
  deletePreset,
  onEditName,
  onSetPreset,
  currentPreset = '',
}: PresetButtonListProps) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      {names.length === 0 ? (
        <div className="text-gray-500 text-sm text-center py-4">No presets available</div>
      ) : (
        names.map((name, index) => (
          <PresetButton
            key={index}
            name={name}
            onDelete={deletePreset ? () => deletePreset(name) : undefined}
            onEditName={onEditName ? (newName) => onEditName(name, newName) : undefined}
            setPreset={onSetPreset ? () => onSetPreset(name) : undefined}
            currentPreset={currentPreset}
          />
        ))
      )}
    </div>
  );
};
