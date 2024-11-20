import type { Meta, StoryObj } from '@storybook/react';
import { TimeInput } from './TimeInput';
import { useState } from 'react';

const meta: Meta<typeof TimeInput> = {
  title: 'Components/TimeInput',
  component: TimeInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const [hour, setHour] = useState(12);
      const [minute, setMinute] = useState(30);
      return (
        <Story
          args={{
            hour,
            minute,
            onHourChange: setHour,
            onMinuteChange: setMinute,
          }}
        />
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof TimeInput>;

export const Default: Story = {
  args: {
    hour: 12,
    minute: 30,
  },
};

export const Midnight: Story = {
  args: {
    hour: 0,
    minute: 0,
  },
};

export const EndOfDay: Story = {
  args: {
    hour: 23,
    minute: 59,
  },
};
