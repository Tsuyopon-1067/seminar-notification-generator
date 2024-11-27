'use client';

import { GreenButton } from '@/components/GreenButton';
import { ImportExport } from '@/components/ImportExport';
import { People } from '@/components/People';
import { PresetButtonList } from '@/components/PresetButtonList';
import { TextArea } from '@/components/TextArea';
import { TimeInput } from '@/components/TimeInput';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useNotificationGenerator } from '@/hooks/useNotificationGenerator';
import { Presets, usePresets } from '@/hooks/usePresets';
import { useTime } from '@/hooks/useTime';
import { useState } from 'react';

export type StoredData = {
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
    initialTemplate: storedData.storedValue.template,
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
      <TextArea
        id="minute"
        rows={2}
        value={notificationGenerator.seminarMinute}
        setText={notificationGenerator.setSeminarMinute}
        placeholder="Write seminar minute url here..."
      />
      <TextArea
        id="template"
        rows={12}
        value={notificationGenerator.template}
        setText={(e) => notificationGenerator.setTemplate}
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
      <TextArea
        id="result"
        rows={16}
        value={notificationGenerator.generatedText}
        setText={notificationGenerator.setGeneratedText}
        placeholder="Generated text will be shown here..."
      />
      <ImportExport
        applySettings={applySettings}
        LOCALSTORAGE_KEY={KEY}
        settings={settings}
        setSettings={setSettings}
      />
    </div>
  );
}
