import type { Meta, StoryObj } from '@storybook/vue3'

import WeatherPanel from './WeatherPanel.vue'
import { HourlyWeather } from '../utils/Weather/HourlyWeather'
import { SiteWeather } from '../utils/Weather/SiteWeather'
import { WeatherIcon } from '../utils/Weather/WeatherIcon'


const meta = {
  title: 'Weather/WeatherPanel',
  component: WeatherPanel,
  tags: ['autodocs'],
  argTypes: {
    sites: Array<SiteWeather>,
    timeline: Array<Date>,
  },
  args: {
    sites: [] as Array<SiteWeather>,
    timeline: [] as Array<Date>
  },
} satisfies Meta<typeof WeatherPanel>

export default meta
type Story = StoryObj<typeof meta>
export const Single: Story = {
  args: {
    sites: [
      new SiteWeather('青森', [
        new HourlyWeather(null, 'Fine', 0, 0)
      ]),
    ],
    timeline: [
      new Date()
    ],
  },
}

export const Long: Story = {
  args: {
    sites: [
      new SiteWeather('青森', [
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
      ]),
      new SiteWeather('青森', [
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
      ]),
      new SiteWeather('青森', [
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
      ]),
      new SiteWeather('青森', [
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
      ]),
      new SiteWeather('青森', [
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
      ]),
      new SiteWeather('青森', [
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
      ]),
      new SiteWeather('青森', [
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
        new HourlyWeather(null, 'Fine', 0, 0),
      ]),
    ],
    timeline: [
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
  },
}
