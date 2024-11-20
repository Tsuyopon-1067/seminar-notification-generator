'use client';

import { useState } from 'react';

type Person = {
  id: string;
  name: string;
  url: string;
};

type People = Person[];

type Preset = {
  id: string;
  name: string;
  people: People;
};

export type Presets = Preset[];

export type usePresetType = {
  presets: Presets;
  editPerson: (presetId: string, personId: string, name: string, url: string) => void;
  deletePerson: (presetId: string, personId: string) => void;
  editPresetName: (presetId: string, name: string) => void;
  deletePreset: (presetId: string) => void;
  addPerson: (presetId: string) => void;
  addPreset: () => void;
  currentPreset: string;
  setCurrentPreset: (presetId: string) => void;
};

export const usePresets = (storedPresets: Presets): usePresetType => {
  const [presets, setPresets] = useState<Presets>(storedPresets);
  const defaultPreset = presets.length > 0 ? presets[0].id : '';
  const [currentPreset, setCurrentPreset] = useState<string>(defaultPreset);
  const editPerson = (presetId: string, personId: string, name: string, url: string) => {
    const preset = presets.find((p) => p.id === presetId);
    const person = preset?.people.find((p) => p.id === personId);
    if (person) {
      person.name = name;
      person.url = url;
      setPresets([...presets]);
    }
  };
  const deletePerson = (presetId: string, personId: string) => {
    const preset = presets.find((p) => p.id === presetId);
    if (preset) {
      preset.people = preset.people.filter((p) => p.id !== personId);
      setPresets([...presets]);
    }
  };
  const editPresetName = (presetId: string, name: string) => {
    const preset = presets.find((p) => p.id === presetId);
    if (preset) {
      preset.name = name;
      setPresets([...presets]);
    }
  };
  const deletePreset = (presetId: string) => {
    setPresets(presets.filter((p) => p.id !== presetId));
  };
  const addPreset = () => {
    const id = Date.now().toString();
    setPresets([...presets, { id, name: '', people: [] }]);
  };
  const addPerson = (presetId: string) => {
    const preset = presets.find((p) => p.id === presetId);
    if (preset) {
      const id = Date.now().toString();
      preset.people = [...preset.people, { id, name: '', url: '' }];
      setPresets([...presets]);
    }
  };
  return {
    presets,
    editPerson,
    deletePerson,
    editPresetName,
    deletePreset,
    addPreset,
    addPerson,
    currentPreset,
    setCurrentPreset,
  };
};
