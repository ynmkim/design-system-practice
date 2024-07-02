import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Avatar from '../components/Avatar';

const meta = {
  title: 'Contents/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imgPath: {
      control: 'text',
      description: 'Avatar의 src 속성',
      defaultValue: '/images/avatar-default.jpg',
    },
    imgAlt: {
      control: 'text',
      description: 'Avatar의 alt 속성',
      defaultValue: 'Avatar',
    },
    size: {
      control: 'select',
      option: ['XS', 'S', 'M', 'L', 'XL'],
      description: 'Avatar의 Size',
      defaultValue: 'S',
    },
    onClick: { action: 'clicked', description: 'Avatard의 Click Event' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgPath: '/images/avatar-default.jpg',
    imgAlt: 'Avatar',
    size: 'S',
  },
};
