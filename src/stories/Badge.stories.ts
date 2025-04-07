import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/Badge';

const meta = {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['new', 'dot', 'number'],
      description: 'Badge 종류',
    },
    count: {
      control: { type: 'number' },
      description: 'variant가 number일 때 표시할 숫자',
      if: { arg: 'variant', eq: 'number' },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'number',
    count: 1000,
  },
};
