import type { Meta, StoryObj } from '@storybook/vue3'

import HelloWorld from './HelloWorld.vue'

const meta = {
  title: 'HelloWorld/Vuetify',
  component: HelloWorld,
  tags: ['autodocs'],
} satisfies Meta<typeof HelloWorld>

export default meta
type Story = StoryObj<typeof meta>

export const DEFAULT: Story = {
  args: {},
}
