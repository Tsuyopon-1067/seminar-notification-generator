import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NameItem } from './NameItem';

const meta: Meta<typeof NameItem> = {
  title: 'Components/NameItem',
  component: NameItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NameItem>;

export const Default: Story = {
  args: {
    name: 'Example Name',
    url: 'https://example.com',
    onEdit: action('onEdit'),
    onDelete: action('onDelete'),
    onUrlChange: action('onUrlChange'),
  },
};

export const WithLongName: Story = {
  args: {
    name: 'This is a very long name that might need special handling',
    url: 'https://example.com/very/long/url/path',
    onEdit: action('onEdit'),
    onDelete: action('onDelete'),
    onUrlChange: action('onUrlChange'),
  },
};

export const EmptyFields: Story = {
  args: {
    name: '',
    url: '',
    onEdit: action('onEdit'),
    onDelete: action('onDelete'),
    onUrlChange: action('onUrlChange'),
  },
};
