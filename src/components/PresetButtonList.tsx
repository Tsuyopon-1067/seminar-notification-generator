import { usePresetType } from '@/hooks/usePresets';
import { PresetButton } from './PresetButton';

export const PresetButtonList = (presets: usePresetType) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      {presets.presets.length === 0 ? (
        <div className="text-gray-500 text-sm text-center py-4">No presets available</div>
      ) : (
        presets.presets.map((preset, index) => {
          return (
            <PresetButton
              key={index}
              name={preset.name}
              editPresetName={(name: string) => presets.editPresetName(preset.id, name)}
              onDelete={() => presets.deletePreset(preset.id)}
              currentPreset={presets.currentPreset}
              setPreset={() => presets.setCurrentPreset(preset.id)}
            />
          );
        })
      )}
      {presets.addPreset && (
        <button
          onClick={presets.addPreset}
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
