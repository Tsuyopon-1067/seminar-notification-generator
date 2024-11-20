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

const sampleNames = ['Preset 1', 'Preset 2', 'Preset 3', 'Custom Preset', 'My Favorite Settings'];

export const Default: Story = {
  args: {
    names: sampleNames,
    deletePreset: action('deletePreset'),
    onEditName: action('onEditName'),
    onSetPreset: action('onSetPreset'),
    currentPreset: '',
  },
};

export const WithActivePreset: Story = {
  args: {
    names: sampleNames,
    deletePreset: action('deletePreset'),
    onEditName: action('onEditName'),
    onSetPreset: action('onSetPreset'),
    currentPreset: 'Preset 2',
  },
};

export const ReadOnly: Story = {
  args: {
    names: sampleNames,
    currentPreset: 'Preset 1',
  },
};

export const Empty: Story = {
  args: {
    names: [],
    deletePreset: action('deletePreset'),
    onEditName: action('onEditName'),
    onSetPreset: action('onSetPreset'),
  },
};

export const LongList: Story = {
  args: {
    names: [
      ...sampleNames,
      'Additional Preset 1',
      'Additional Preset 2',
      'Additional Preset 3',
      'Additional Preset 4',
      'Additional Preset 5',
    ],
    deletePreset: action('deletePreset'),
    onEditName: action('onEditName'),
    onSetPreset: action('onSetPreset'),
    currentPreset: 'Additional Preset 3',
  },
};

export const WithLongNames: Story = {
  args: {
    names: [
      'This is a very long preset name that might need special handling',
      'Another long preset name for testing purposes',
      'Yet another lengthy preset name to test the layout',
      'Short name',
      'Very very very long preset name that goes on and on',
    ],
    deletePreset: action('deletePreset'),
    onEditName: action('onEditName'),
    onSetPreset: action('onSetPreset'),
    currentPreset: 'Short name',
  },
};
