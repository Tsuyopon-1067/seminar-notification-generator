import type { Meta, StoryObj } from '@storybook/react';
import { PresetButton } from './PresetButton';
import { action } from '@storybook/addon-actions';

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
    onEditName: action('onEditName'),
    currentPreset: '',
  },
};

export const Active: Story = {
  args: {
    name: 'Example Preset',
    onDelete: action('onDelete'),
    onEditName: action('onEditName'),
    currentPreset: 'Example Preset',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'Read Only Preset',
    currentPreset: '',
  },
};

export const ReadOnlyActive: Story = {
  args: {
    name: 'Read Only Preset',
    currentPreset: 'Read Only Preset',
  },
};

export const LongName: Story = {
  args: {
    name: 'This is a very long preset name that might need special handling',
    onDelete: action('onDelete'),
    onEditName: action('onEditName'),
    currentPreset: '',
  },
};

export const LongNameActive: Story = {
  args: {
    name: 'This is a very long preset name that might need special handling',
    onDelete: action('onDelete'),
    onEditName: action('onEditName'),
    currentPreset: 'This is a very long preset name that might need special handling',
  },
};

export const EditMode: Story = {
  args: {
    name: 'Example Preset',
    onDelete: action('onDelete'),
    onEditName: action('onEditName'),
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
