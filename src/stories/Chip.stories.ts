import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Chip from '../components/Chip';

const meta = {
  title: 'Inputs/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Chip의 Text Label',
      defaultValue: 'Chip',
    },
    appreance: {
      control: 'select',
      option: ['contained', 'outlined'],
      description: 'Chip의 Types',
      defaultValue: 'contained',
    },
    size: {
      control: 'select',
      option: ['small', 'medium', 'large'],
      description: 'Chip의 Size',
      defaultValue: 'small',
    },
    onClick: { action: 'clicked', description: 'Chipd의 Click Event' },
    isSelected: {
      control: 'boolean',
      description: 'Chip의 활성화 여부',
      defaultValue: false,
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: 'Chip text',
    appreance: 'contained',
    size: 'small',
    isSelected: true,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Chip text',
    appreance: 'outlined',
    size: 'small',
    isSelected: true,
  },
};
