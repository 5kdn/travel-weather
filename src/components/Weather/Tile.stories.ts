import type { Meta, StoryObj } from '@storybook/vue3'
import Tile from './Tile.vue'
import { HourlyWeather } from '../utils/Weather/HourlyWeather'
import { WeatherIcon } from '../utils/Weather/WeatherIcon'


const meta = {
  title: 'Weather/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    hourlyWeather: HourlyWeather,
  },
  args: {
    hourlyWeather: new HourlyWeather(null, null, null, null)
  }, // default value
} satisfies Meta<typeof Tile>

export default meta
type Story = StoryObj<typeof meta>
export const Fine: Story = {
  args: {
    hourlyWeather: new HourlyWeather(new Date(), WeatherIcon.Fine, 30, 0)
  },
}

export const Cloudy: Story = {
  args: {
    hourlyWeather: new HourlyWeather(new Date(), WeatherIcon.Cloud, 25, 50)
  },
}

export const Fog: Story = {
  args: {
    hourlyWeather: new HourlyWeather(new Date(), WeatherIcon.Fog, 18, 60)
  },
}

export const Shower: Story = {
  args: {
    hourlyWeather: new HourlyWeather(new Date(), WeatherIcon.Shower, 18, 60)
  },
}

export const Rain: Story = {
  args: {
    hourlyWeather: new HourlyWeather(new Date(), WeatherIcon.Rain, 18, 100)
  },
}

export const Snow: Story = {
  args: {
    hourlyWeather: new HourlyWeather(new Date(), WeatherIcon.Snow, -20, 100)
  },
}

export const DayShower: Story = {
  args: {
    hourlyWeather: new HourlyWeather(new Date(), WeatherIcon.DayShower, 15, 95)
  },
}

export const DaySnow: Story = {
  args: {
    hourlyWeather: new HourlyWeather(new Date(), WeatherIcon.DaySnow, 0, 0)
  },
}

export const Thunderstorm: Story = {
  args: {
    hourlyWeather: new HourlyWeather(
      new Date(),
      WeatherIcon.Thunderstorm,
      18,
      90,
    ),
  },
}

export const Error: Story = {
  args: {
    hourlyWeather: new HourlyWeather(null, null, null, null)
  },
}
