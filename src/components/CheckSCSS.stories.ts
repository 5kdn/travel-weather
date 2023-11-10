import type { Meta, StoryObj } from '@storybook/vue3'

import CheckSCSS from './CheckSCSS.vue'

const meta = {
  title: 'Check/SCSS',
  component: CheckSCSS,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckSCSS>

export default meta
type Story = StoryObj<typeof meta>

export const DEFAULT: Story = {
  args: {},
}
