import type { Meta, StoryObj } from '@storybook/vue3'
import Panel from './Panel.vue'


const meta = {
  title: 'Weather/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    sites: Array < { lat: number, lng: number }>

  },
  args: {
  }, // default value
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPanel: Story = {
  // args: {
  // }
}
