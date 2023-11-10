import type { Meta, StoryObj } from '@storybook/vue3'

import SayHello from './SayHello.vue'

const meta = {
  title: 'SayHello/yoshio',
  component: SayHello,
  argTypes: {
    name: String,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SayHello>

export default meta
type Story = StoryObj<typeof meta>

export const Yoshio: Story = {
  args: {
    name: 'Yoshio',
  },
}

export const Satoshi: Story = {
  args: {
    name: 'Satoshi',
  },
}
