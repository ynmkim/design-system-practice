import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TopNavigation from '../components/TopNavigation';

const meta = {
  title: 'Navigations/TopNavigation',
  component: TopNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[360px] border">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isDark: {
      control: 'boolean',
      description: '다크모드 여부',
      defaultValue: false,
    },
    showBackButton: {
      control: 'boolean',
      description: '뒤로 가기 버튼 표시 여부',
      defaultValue: false,
    },
    showCloseButton: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부',
      defaultValue: false,
    },
    showTitle: {
      control: 'boolean',
      description: '페이지 제목의 표시 여부',
      defaultValue: false,
    },
    title: {
      control: 'text',
      description: '페이지의 제목',
      defaultValue: 'Title',
    },
    onBackButtonClick: {
      action: 'clicked',
      description: '뒤로 가기 버튼의 클릭 이벤트',
    },
    onCloseButtonClick: {
      action: 'clicked',
      description: '닫기 버튼의 클릭 이벤트',
    },
  },
  args: {
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
  },
} satisfies Meta<typeof TopNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDark: false,
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: 'Title',
  },
};
