import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Person } from './Person';

const meta: Meta<typeof Person> = {
  title: 'Components/Person',
  component: Person,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Person>;

export const Default: Story = {
  args: {
    name: 'Example Person',
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
