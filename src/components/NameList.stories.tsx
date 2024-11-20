import type { Meta, StoryObj } from '@storybook/react';
import { NameList } from './NameList';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof NameList> = {
  title: 'Components/NameList',
  component: NameList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NameList>;

const sampleItems = [
  {
    id: '1',
    name: 'Example Item 1',
    url: 'https://example1.com',
    onEdit: action('onEdit'),
    onDelete: action('onDelete'),
    onUrlChange: action('onUrlChange'),
  },
  {
    id: '2',
    name: 'Example Item 2',
    url: 'https://example2.com',
    onEdit: action('onEdit'),
    onDelete: action('onDelete'),
    onUrlChange: action('onUrlChange'),
  },
];

export const Default: Story = {
  args: {
    names: sampleItems,
    onAdd: action('onAdd'),
  },
};

export const Empty: Story = {
  args: {
    names: [],
    onAdd: action('onAdd'),
  },
};

export const WithLongContent: Story = {
  args: {
    names: [
      {
        id: '1',
        name: 'This is a very long name that might need special handling',
        url: 'https://example.com/very/long/url/path/that/might/need/special/handling',
        onEdit: action('onEdit'),
        onDelete: action('onDelete'),
        onUrlChange: action('onUrlChange'),
      },
      {
        id: '2',
        name: 'Short name',
        url: 'https://short.com',
        onEdit: action('onEdit'),
        onDelete: action('onDelete'),
        onUrlChange: action('onUrlChange'),
      },
    ],
    onAdd: action('onAdd'),
  },
};
