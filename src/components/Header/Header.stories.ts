import type { Meta, StoryObj } from '@storybook/react';

import Header from './index';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Header',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Header',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Header',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Header',
  },
};
