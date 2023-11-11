import type { Meta, StoryObj } from '@storybook/vue3'

import Site from './Site.vue'
import { HourlyWeather } from '../utils/Weather/HourlyWeather'
import { SiteWeather } from '../utils/Weather/SiteWeather'
import { WeatherIcon } from '../utils/Weather/WeatherIcon'


const meta = {
  title: 'Weather/Site',
  component: Site,
  tags: ['autodocs'],
  argTypes: {
    prop: SiteWeather,
  },
  args: {
    prop: new SiteWeather('')
  },
} satisfies Meta<typeof Site>

export default meta
type Story = StoryObj<typeof meta>
export const Single: Story = {
  args: {
    prop: new SiteWeather(
      '津市',
      [
        new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
      ],
      )
    },
  }

  export const LongName: Story = {
    args: {
      prop: new SiteWeather(
        '鹿児島県志布志市志布志町志布志',
        [
          new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
        ],
        )
      },
    }

    export const Many: Story = {
      args: {
        prop: new SiteWeather(
          '津市',
          [
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
            new HourlyWeather(new Date(), WeatherIcon.Fine, 0, 0),
          ],
          )
        },
      }
