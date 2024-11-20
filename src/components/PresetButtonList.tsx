import { PresetButton, PresetButtonProps } from './PresetButton';

type PresetButtonListProps = {
  presetButtonList: PresetButtonProps[];
  onAdd?: () => void;
};

export const PresetButtonList = ({ presetButtonList, onAdd }: PresetButtonListProps) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      {presetButtonList.length === 0 ? (
        <div className="text-gray-500 text-sm text-center py-4">No presets available</div>
      ) : (
        presetButtonList.map((preset, index) => <PresetButton key={index} {...preset} />)
      )}
      {onAdd && (
        <button
          onClick={onAdd}
          className="mt-2 h-10 border-2 border-dashed border-gray-300 rounded-lg 
                   hover:border-blue-500 hover:bg-blue-50 transition-all duration-200
                   flex items-center justify-center group"
        >
          <span className="text-2xl text-gray-400 group-hover:text-blue-500 transition-colors">
            ＋
          </span>
        </button>
      )}
    </div>
  );
};
