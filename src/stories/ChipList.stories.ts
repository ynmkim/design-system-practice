import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ChipList from '../components/ChipList';

const meta = {
  title: 'Inputs/ChipList',
  component: ChipList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    chipList: {
      control: 'object',
      description: 'Chip의 Array',
      defaultValue: ['Chip1', 'Chip2', 'Chip3'],
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
    onClick: { action: 'clicked', description: 'Chip의 Click Event' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ChipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    chipList: ['Chip1', 'Chip2', 'Chip3'],
    appreance: 'contained',
    size: 'small',
  },
};

export const Outlined: Story = {
  args: {
    chipList: ['Chip1', 'Chip2', 'Chip3'],
    appreance: 'outlined',
    size: 'small',
  },
};
