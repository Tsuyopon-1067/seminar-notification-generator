'use client';

import { GreenButton } from '@/components/GreenButton';
import { People } from '@/components/People';
import { PresetButtonList } from '@/components/PresetButtonList';
import { TimeInput } from '@/components/TimeInput';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useNotificationGenerator } from '@/hooks/useNotificationGenerator';
import { Presets, usePresets } from '@/hooks/usePresets';
import { useTime } from '@/hooks/useTime';
import { useState } from 'react';

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
  const [settings, setSettings] = useState('');
  const applySettings = () => {
    const data = JSON.parse(settings) as StoredData;
    storedData.setValue(data);

    presets.setPresets(data.presets);
    time.onHourChange(data.hour);
    time.onMinuteChange(data.minute);
    notificationGenerator.setTemplate(data.template);
    notificationGenerator.setSeminarMinute(data.seminarMinute);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const copySettings = () => {
    const data = localStorage.getItem(KEY);
    if (data) {
      const formattedData = JSON.stringify(JSON.parse(data), null, 2);
      navigator.clipboard.writeText(formattedData).then(() => {
        alert('Copied to clipboard!');
      });
    }
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
        id="minute"
        rows={2}
        value={notificationGenerator.seminarMinute}
        onChange={(e) => notificationGenerator.setSeminarMinute(e.target.value)}
        className="block p-2.5 m-2 mt-4 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write seminar minute url here..."
      />
      <textarea
        id="template"
        rows={16}
        value={notificationGenerator.template}
        onChange={(e) => notificationGenerator.setTemplate(e.target.value)}
        className="block p-2.5 m-2 mt-4 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write template here..."
      />
      <div className={'flex m-2 gap-4'}>
        <div className={'flex-1'}>
          <GreenButton onClick={handleSave}>
            <span>Save</span>
          </GreenButton>
        </div>
        <div className={'flex-1'}>
          <GreenButton onClick={notificationGenerator.generate}>
            <span>Generate</span>
          </GreenButton>
        </div>
        <div className={'flex-1'}>
          <GreenButton onClick={notificationGenerator.generateCopy}>
            <span>Generate+Copy</span>
          </GreenButton>
        </div>
      </div>
      <h2 className={'text-gray-500 text-2xl mt-8'}>Output</h2>
      <textarea
        id="result"
        rows={16}
        value={notificationGenerator.generatedText}
        onChange={(e) => notificationGenerator.setGeneratedText(e.target.value)}
        className="block p-2.5 my-2 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Generated text will be shown here..."
      />
      <h2 className={'text-gray-500 text-2xl mt-8'}>Import / Export</h2>
      <textarea
        id="result"
        rows={16}
        value={settings}
        onChange={(e) => setSettings(e.target.value)}
        className="block p-2.5 my-2 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write JSON text here..."
      />
      <div className={'flex m-2 gap-4'}>
        <div className={'flex-1'}>
          <GreenButton onClick={applySettings}>
            <span>Import Settings</span>
          </GreenButton>
        </div>
        <div className={'flex-1'}>
          <GreenButton onClick={copySettings}>
            <span>Export Current Settings to Clip Board</span>
          </GreenButton>
        </div>
      </div>
    </div>
  );
}
