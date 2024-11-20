'use client';

import { People } from '@/components/People';
import { PresetButtonList } from '@/components/PresetButtonList';
import { usePresets } from '@/hooks/usePresets';

export default function Home() {
  const presets = usePresets([]);
  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-3 max-w-lg mx-auto">
        <div className="w-1/3">
          <PresetButtonList {...presets} />
        </div>
        <div className="flex-1">
          <People presets={presets} onAdd={() => presets.addPerson(presets.currentPreset)} />
        </div>
      </div>
    </div>
  );
}
