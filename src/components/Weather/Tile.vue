<script lang="ts" setup>
import { HourlyWeather } from '../utils/Weather/HourlyWeather'

export interface Props {
  hourlyWeather?: HourlyWeather
}
const props = withDefaults(defineProps<Props>(), {
  hourlyWeather: () => new HourlyWeather(null, null, null, null),
})
</script>

<template lang="pug">
#Tile-Inner-Wrapper
  .hourly_item
    v-icon.icon.Fine(
      v-if="hourlyWeather.icon === 'Fine'" icon="mdi-weather-sunny")
    v-icon.icon.Cloudy(
      v-if="hourlyWeather.icon === 'Cloudy'" icon="mdi-weather-cloudy")
    v-icon.icon.Foggy(
      v-if="hourlyWeather.icon === 'Foggy'" icon="mdi-weather-fog")
    v-icon.icon.Drizzle(
      v-if="hourlyWeather.icon === 'Drizzle'" icon="mdi-weather-pouring")
    v-icon.icon.FreezingDrizzle(
      v-if="hourlyWeather.icon === 'FreezingDrizzle'"
      icon="mdi-weather-pouring")
    v-icon.icon.Rainy(
      v-if="hourlyWeather.icon === 'Rainy'" icon="mdi-weather-rainy")
    v-icon.icon.FreezingRain(
      v-if="hourlyWeather.icon === 'FreezingRain'"
      icon="mdi-weather-pouring")
    v-icon.icon.Snowy(
      v-if="hourlyWeather.icon === 'Snowy'" icon="mdi-weather-snowy")
    v-icon.icon.RainShower(
      v-if="hourlyWeather.icon === 'RainShower'"
      icon="mdi-weather-partly-rainy")
    v-icon.SnowShower(
      v-if="hourlyWeather.icon === 'SnowShower'"
      icon="mdi-weather-partly-snowy")
    v-icon.icon.Thunderstorm(
      v-if="hourlyWeather.icon === 'Thunderstorm'"
      icon="mdi-lightning-bolt-outline")
    v-icon.icon.NA(v-if="hourlyWeather.icon === 'NA'" icon="mdi-close")
    .description
      .temp
        v-icon(v-if='hourlyWeather.temperture === null' icon="mdi-close")
        span(v-else) {{ hourlyWeather.temperture.toFixed(1) }}
      .separator: span /
      .chance_of_rain
        v-icon(v-if='hourlyWeather.chanceOfRain === null' icon="mdi-close")
        span(v-else) {{ hourlyWeather.chanceOfRain.toFixed(0) }}
</template>

<style lang="scss" scoped>
// TODO: アイコンを中央寄せ
// TODO: アイコンを選び直し
$item_size: 48px;
$icon_height: 30px;
$text_size: 5pt;
$separator_size: 8pt;

.hourly_item {
  width: $item_size;
  height: $item_size;
  display: flex;
  flex-direction: column;

  .icon {
    height: $icon_height;
    &.Fine {
      color: red;
    }
    &.Cloudy {
      color: gray;
    }
    &.Foggy {
      color: cadetblue;
    }
    &.Drizzle {
      color: cadetblue;
    }
    &.FreezingDrizzle {
      color: cadetblue;
    }
    &.Rainy {
      color: cadetblue;
    }
    &.FreezingRain {
      color: cadetblue;
    }
    &.Snowy {
      color: cadetblue;
    }
    &.RainShower {
      color: cadetblue;
    }
    &.SnowShower {
      color: cadetblue;
    }
    &.Thunderstorm {
      color: rgb(210, 210, 0);
    }
    &.NA {
      color: darkslategray;
    }
  }
  .description {
    flex-grow: 1;
    display: flex;
    text-justify: center;
    text-align: center;

    .temp,
    .chance_of_rain,
    .separator {
      display: flex;
      align-items: center;
      text-align: center;
      span {
        width: 100%;
      }
    }
    .temp,
    .chance_of_rain {
      flex-grow: 1;
      justify-content: center;
      align-items: center;
      font-size: $text_size;
    }
    .separator {
      font-size: $separator_size;
    }
    .temp > span::after {
      content: '℃';
    }
    .chance_of_rain > span::after {
      content: '%';
    }
  }
}
</style>
