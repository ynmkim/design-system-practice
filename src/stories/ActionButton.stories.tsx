import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ActionButton from '../components/ActionButton';

const meta = {
  title: 'Buttons/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    buttonType: {
      control: 'text',
      description: '버튼의 type 속성',
      defaultValue: 'button',
    },
    appreance: {
      control: 'select',
      option: ['contained', 'outlined', 'ghost'],
      description: '버튼의 type',
      defaultValue: 'contained',
    },
    isDisabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태',
      defaultValue: true,
    },
    children: {
      control: 'text',
      description: '버튼의 텍스트',
      defaultValue: 'Button',
    },
    onClick: { action: 'clicked', description: '버튼의 클릭 이벤트' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    buttonType: 'button',
    appreance: 'contained',
    isDisabled: false,
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    buttonType: 'button',
    appreance: 'outlined',
    isDisabled: false,
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    buttonType: 'button',
    appreance: 'ghost',
    isDisabled: false,
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    buttonType: 'button',
    appreance: 'contained',
    isDisabled: true,
    children: 'Button',
  },
};
