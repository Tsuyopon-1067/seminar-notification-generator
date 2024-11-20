import { useState } from 'react';
import { usePresetType } from './usePresets';

type UseNotificationGeneratorProps = {
  presets: usePresetType;
  hour: number;
  minute: number;
  initialTemplate: string;
  initialMinute: string;
};

type UseNotificationGeneratorType = {
  template: string;
  setTemplate: (template: string) => void;
  seminarMinute: string;
  setSeminarMinute: (minute: string) => void;
  generate: () => string;
  generateCopy: () => void;
  generatedText: string;
  setGeneratedText: (text: string) => void;
};

export const useNotificationGenerator = ({
  presets,
  hour,
  minute,
  initialTemplate,
  initialMinute,
}: UseNotificationGeneratorProps): UseNotificationGeneratorType => {
  const [template, setTemplate] = useState<string>(initialTemplate);
  const [seminarMinute, setSeminarMinute] = useState<string>(initialMinute);
  const [generatedText, setGeneratedText] = useState<string>('');
  const generate = () => {
    const TEMPLATE_TIME = 'TIME';
    const TEMPLATE_PEOPLE = 'PEOPLE';
    const timeStr = ` *${hour.toString()}:${minute.toString().padStart(2, '0')}* `;
    const people = presets.presets.find((p) => p.id === presets.currentPreset)?.people;
    const peopleText = people?.map((p) => `* ${p.name}: ${p.url}`).join('\n');
    const result = template
      .replace(TEMPLATE_TIME, timeStr)
      .replace(TEMPLATE_PEOPLE, peopleText || '');
    setGeneratedText(result);
    console.log(result);
    return result;
  };
  const generateCopy = () => {
    const ret = generate();
    navigator.clipboard.writeText(ret);
  };
  return {
    template,
    seminarMinute,
    setSeminarMinute,
    setTemplate,
    generate,
    generateCopy,
    generatedText,
    setGeneratedText,
  };
};
