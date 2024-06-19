import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '../components/ErrorMessage';

const meta = {
  title: 'Text/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: '에러 메시지의 텍스트' },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Please enter a Error description.',
  },
};
