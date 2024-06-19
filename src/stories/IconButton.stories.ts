import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from '../components/IconButton';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconPath: {
      control: 'text',
      description: '이미지의 경로',
      defaultValue: '',
    },
    iconAlt: { control: 'text', description: '이미지의 alt 속성' },
    onClick: { action: 'clicked', description: '버튼의 클릭 이벤트' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: '/icons/ic-cancel-white.svg',
    iconAlt: '아이콘 이미지',
  },
};
