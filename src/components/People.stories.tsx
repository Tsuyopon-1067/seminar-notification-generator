import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { People } from './People';

const meta: Meta<typeof People> = {
  title: 'Components/People',
  component: People,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof People>;

const samplePresets = {
  presets: [
    {
      id: 'preset1',
      name: 'Preset 1',
      people: [
        {
          id: '1',
          name: 'Example Item 1',
          url: 'https://example1.com',
        },
        {
          id: '2',
          name: 'Example Item 2',
          url: 'https://example2.com',
        },
      ],
    },
  ],
  currentPreset: 'preset1',
  editPerson: action('editPerson'),
  deletePerson: action('deletePerson'),
  editPresetName: action('editPresetName'),
  deletePreset: action('deletePreset'),
  addPerson: action('addPerson'),
  addPreset: action('addPreset'),
  setCurrentPreset: action('setCurrentPreset'),
  setPresets: action('setPresets'),
};

export const Default: Story = {
  args: {
    presets: samplePresets,
    onAdd: action('onAdd'),
  },
};

export const Empty: Story = {
  args: {
    presets: {
      ...samplePresets,
      presets: [],
    },
    onAdd: action('onAdd'),
  },
};

export const WithLongContent: Story = {
  args: {
    presets: {
      ...samplePresets,
      presets: [
        {
          id: 'preset1',
          name: 'Preset 1',
          people: [
            {
              id: '1',
              name: 'This is a very long name that might need special handling',
              url: 'https://example.com/very/long/url/path/that/might/need/special/handling',
            },
            {
              id: '2',
              name: 'Short name',
              url: 'https://short.com',
            },
          ],
        },
      ],
    },
    onAdd: action('onAdd'),
  },
};
