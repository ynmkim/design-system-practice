import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TextInput from '../components/TextInput';

const meta = {
  title: 'Inputs/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'text',
      description: 'input의 type 속성',
      defaultValue: 'text',
    },
    id: {
      console: 'text',
      description: 'intut의 id 속성',
      defaultValue: 'text',
    },
    name: {
      control: 'text',
      description: 'input의 name 속성',
      defaultValue: 'text',
    },
    placeholder: {
      control: 'text',
      description: 'input의 placeholder 속성',
      defaultValue: 'text',
    },
    value: {
      control: 'text',
      description: '텍스트 필드의 값',
      defaultValue: 'text',
    },
    onChange: { action: 'changed', description: '텍스트 필드 값 변경 이벤트' },
    iconPath: {
      control: 'text',
      description: '이미지의 경로',
      defaultValue: '',
    },
    iconAlt: {
      control: 'text',
      description: '이미지의 alt 속성',
      defaultValue: '',
    },
    onIconClick: { action: 'clicked', description: '버튼의 클릭 이벤트' },
    errorMessage: {
      control: 'text',
      description: 'input의 에러 메시지',
      defaultValue: '',
    },
    isError: {
      control: 'boolean',
      description: '에러 상태 여부',
      defaultValue: false,
    },
  },
  args: {
    onIconClick: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    id: 'email',
    name: 'email',
    placeholder: '이메일을 입력해 주세요.',
    value: '',
    iconPath: '/icons/ic-cancel-white.svg',
    iconAlt: '취소',
    errorMessage: 'Plase enter a error description',
    isError: false,
  },
};
