import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { PresetButtonList } from './PresetButtonList';

const meta: Meta<typeof PresetButtonList> = {
  title: 'Components/PresetButtonList',
  component: PresetButtonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresetButtonList>;

const samplePresets = {
  presets: [
    {
      id: '1',
      name: 'Preset 1',
      people: [],
    },
    {
      id: '2',
      name: 'Preset 2',
      people: [],
    },
    {
      id: '3',
      name: 'Preset 3',
      people: [],
    },
  ],
  currentPreset: '',
  deletePreset: action('deletePreset'),
  editPresetName: action('editPresetName'),
  setCurrentPreset: action('setCurrentPreset'),
  addPreset: action('addPreset'),
};

export const Default: Story = {
  args: { ...samplePresets },
};

export const WithActivePreset: Story = {
  args: {
    ...samplePresets,
    currentPreset: 'Preset 2',
  },
};

export const Empty: Story = {
  args: {
    ...samplePresets,
    presets: [],
  },
};

export const WithoutAddButton: Story = {
  args: {
    ...samplePresets,
    addPreset: undefined,
  },
};

export const ReadOnly: Story = {
  args: {
    presets: samplePresets.presets,
    currentPreset: 'Preset 1',
    deletePreset: undefined,
    editPresetName: undefined,
    setCurrentPreset: undefined,
    addPreset: undefined,
  },
};
