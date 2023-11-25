import type { StoryObj } from '@storybook/vue3'
import { Place } from '@/components/utils/place'
import MapLoader from './MapLoader.vue'

const meta = {
  title: 'Map/MapLoader',
  component: MapLoader,
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
    places: Array<Place>,
    onNewval: { action: 'received args' },
  },
  args: {},
}
export default meta

type Story = StoryObj<typeof meta>
export const None: Story = {
  args: {
    places: [] as Array<Place>       // TODO: 空の場合日本全体を写す
  },
}

export const Single: Story = {
  args: {
    places: [
      new Place('A', 35.676764, 139.733690)
    ] as Array<Place>
  },
}

export const Multi: Story = {
  args: {
    places: [
      new Place('A', 35.676764, 139.733690),
      new Place('B', 35.642110, 139.751527),
      new Place('C', 35.278699, 139.670040),
      new Place('D', 35.562479, 139.716073),
      new Place('E', 43.066739, 141.350560),
    ]
  },
}
export const Dispersion: Story = {
  args: {
    places: [
        new Place('A', 43.066739, 141.350560),
        new Place('B', 43.162337, 144.296765),
        new Place('C', 39.920069, 141.586374),
        new Place('D', 35.676764, 139.733690),
        new Place('E', 34.963067, 135.754264),
        new Place('F', 34.948993, 132.754855),
        new Place('G', 32.655616, 130.873502),
        new Place('H', 26.349715, 127.775964),
    ]
  },
}
