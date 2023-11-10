import type { Meta, StoryObj } from '@storybook/vue3'

import CheckPug from './CheckPug.vue'

const meta = {
  title: 'Check/Pug',
  component: CheckPug,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckPug>

export default meta
type Story = StoryObj<typeof meta>

export const DEFAULT: Story = {
  args: {},
}
