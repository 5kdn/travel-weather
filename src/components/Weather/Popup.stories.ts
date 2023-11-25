import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import PopupVue from './Popup.vue'
import { MovementMethod } from '../utils/MovementMethod'


const meta = {
  title: 'Weather/Popup',
  component: PopupVue,
  tags: ['autodocs'],
  argTypes: {
    isShow: Boolean,
    movementMethod: MovementMethod,
    points: Array<string>,
    onSender: {action: 'received args'},
  },
} satisfies Meta<typeof PopupVue>

export default meta
type Story = StoryObj<typeof meta>
export const ON: Story = {
  args: {
    isShow: true
  }
}

export const OFF: Story = {
  args: {
    isShow: false,
  },
}

export const ByCar: Story = {
  args: {
    isShow: true,
    movementMethod: MovementMethod.Car
  },
}

export const ByBicycle: Story = {
  args: {
    isShow: true,
    movementMethod: MovementMethod.Bicycle,
  },
}

export const ByWalk: Story = {
  args: {
    isShow: true,
    movementMethod: MovementMethod.Walk,
  },
}

export const SettedPoint: Story = {
  args: {
    isShow: true,
    points: ['point A', 'point B', 'point C'],
  },
}
