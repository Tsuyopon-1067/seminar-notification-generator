import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { PresetButton } from './PresetButton';

const meta: Meta<typeof PresetButton> = {
  title: 'Components/PresetButton',
  component: PresetButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    currentPreset: '',
    setPreset: action('setPreset'),
  },
};

export default meta;
type Story = StoryObj<typeof PresetButton>;

export const Default: Story = {
  args: {
    name: 'Example Preset',
    onDelete: action('onDelete'),
    editPresetName: action('editPresetName'), // onEditName → editPresetName
    setPreset: action('setPreset'),
    currentPreset: '',
  },
};

export const Active: Story = {
  args: {
    name: 'Example Preset',
    onDelete: action('onDelete'),
    editPresetName: action('editPresetName'), // 修正
    setPreset: action('setPreset'),
    currentPreset: 'Example Preset',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'Read Only Preset',
    currentPreset: '',
    setPreset: undefined, // 追加
  },
};

export const ReadOnlyActive: Story = {
  args: {
    name: 'Read Only Preset',
    currentPreset: 'Read Only Preset',
    setPreset: undefined, // 追加
  },
};

export const LongName: Story = {
  args: {
    name: 'This is a very long preset name that might need special handling',
    onDelete: action('onDelete'),
    editPresetName: action('editPresetName'), // 修正
    setPreset: action('setPreset'),
    currentPreset: '',
  },
};

export const LongNameActive: Story = {
  args: {
    name: 'This is a very long preset name that might need special handling',
    onDelete: action('onDelete'),
    editPresetName: action('editPresetName'), // 修正
    setPreset: action('setPreset'),
    currentPreset: 'This is a very long preset name that might need special handling',
  },
};

export const EditMode: Story = {
  args: {
    name: 'Example Preset',
    onDelete: action('onDelete'),
    editPresetName: action('editPresetName'), // 修正
    setPreset: action('setPreset'),
    currentPreset: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the button in edit mode',
      },
    },
  },
};
