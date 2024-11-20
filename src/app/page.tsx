'use client';

import { GreenButton } from '@/components/GreenButton';
import { People } from '@/components/People';
import { PresetButtonList } from '@/components/PresetButtonList';
import { TimeInput } from '@/components/TimeInput';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useNotificationGenerator } from '@/hooks/useNotificationGenerator';
import { Presets, usePresets } from '@/hooks/usePresets';
import { useTime } from '@/hooks/useTime';

type StoredData = {
  presets: Presets;
  hour: number;
  minute: number;
  template: string;
  seminarMinute: string;
};

export default function Home() {
  const KEY = 'seminerNotificationCreator';
  const storedData = useLocalStorage<StoredData>(KEY, {
    presets: [],
    hour: 0,
    minute: 0,
    template: '',
    seminarMinute: '',
  });
  const storedValue = storedData.storedValue;
  const presets = usePresets(storedValue.presets);
  const time = useTime(storedValue.hour, storedValue.minute);
  const notificationGenerator = useNotificationGenerator({
    presets,
    hour: time.hour,
    minute: time.minute,
    initialTemplate: '',
    initialMinute: '',
  });
  const handleSave = () => {
    const presetsData = presets.presets;
    const hour = time.hour;
    const minute = time.minute;
    const template = notificationGenerator.template;
    const seminarMinute = notificationGenerator.seminarMinute;
    storedData.setValue({ presets: presetsData, hour, minute, template, seminarMinute });
  };
  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-3 mx-auto">
        <div className="w-1/3">
          <PresetButtonList {...presets} />
        </div>
        <div className="flex-1">
          <People presets={presets} onAdd={() => presets.addPerson(presets.currentPreset)} />
        </div>
      </div>
      <TimeInput {...time} />
      <textarea
        id="template"
        rows={16}
        value={notificationGenerator.template}
        onChange={(e) => notificationGenerator.setTemplate(e.target.value)}
        className="block p-2.5 m-2 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write template here..."
      />
      <div className={'flex m-2 gap-4'}>
        <div className={'flex-1'}>
          <GreenButton onClick={handleSave}>
            <span>save</span>
          </GreenButton>
        </div>
        <div className={'flex-1'}>
          <GreenButton onClick={notificationGenerator.generate}>
            <span>generate</span>
          </GreenButton>
        </div>
        <div className={'flex-1'}>
          <GreenButton onClick={notificationGenerator.generateCopy}>
            <span>generate+copy</span>
          </GreenButton>
        </div>
      </div>
      <textarea
        id="result"
        rows={16}
        value={notificationGenerator.generatedText}
        onChange={(e) => notificationGenerator.setGeneratedText(e.target.value)}
        className="block p-2.5 mt-8 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Generated text will be shown here..."
      />
    </div>
  );
}
