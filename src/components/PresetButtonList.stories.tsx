import type { Meta, StoryObj } from '@storybook/react';
import { PresetButtonList } from './PresetButtonList';
import { action } from '@storybook/addon-actions';

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

const samplePresets = [
  {
    name: 'Preset 1',
    onDelete: action('onDelete'),
    onEditName: action('onEditName'),
    setPreset: action('setPreset'),
    currentPreset: '',
  },
  {
    name: 'Preset 2',
    onDelete: action('onDelete'),
    onEditName: action('onEditName'),
    setPreset: action('setPreset'),
    currentPreset: '',
  },
  {
    name: 'Preset 3',
    onDelete: action('onDelete'),
    onEditName: action('onEditName'),
    setPreset: action('setPreset'),
    currentPreset: '',
  },
];

export const Default: Story = {
  args: {
    presetButtonList: samplePresets,
    onAdd: action('onAdd'),
  },
};

export const WithActivePreset: Story = {
  args: {
    presetButtonList: samplePresets.map((preset) =>
      preset.name === 'Preset 2' ? { ...preset, currentPreset: 'Preset 2' } : preset,
    ),
    onAdd: action('onAdd'),
  },
};

export const Empty: Story = {
  args: {
    presetButtonList: [],
    onAdd: action('onAdd'),
  },
};

export const WithoutAddButton: Story = {
  args: {
    presetButtonList: samplePresets,
  },
};

export const ReadOnly: Story = {
  args: {
    presetButtonList: samplePresets.map((preset) => ({
      name: preset.name,
      currentPreset: preset.name === 'Preset 1' ? preset.name : '',
    })),
  },
};
