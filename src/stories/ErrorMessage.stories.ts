import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ErrorMessage from '../components/ErrorMessage';

const meta = {
  title: 'Text/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'ErrorMessage의 텍스트' },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '에러 메시지',
  },
};
