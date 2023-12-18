import type { Meta, StoryObj } from '@storybook/vue3'
import TravelDetail from './TravelDetail.vue'

const meta = {
  title: 'Views/TravelDetail',
  component: TravelDetail,
  tags: ['autodocs'],
  decorators: [() => ({template: `
  <div style="
    width:100%;
    height:100vh;
    border:1px solid red;
  ">
    <story />
  </div>`
  })],
  argTypes: {
  },
} satisfies Meta<typeof TravelDetail>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
}
