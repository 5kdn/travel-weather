<script lang="ts" setup>
import { SiteWeather } from '../utils/Weather/SiteWeather'
import Tile from './Tile.vue'

export interface Props {
  prop?: SiteWeather
}
const props = withDefaults(defineProps<Props>(), {
  prop: () => new SiteWeather(null),
})
</script>

<script lang="ts">
export default {
  components: {
    'Weather-Tile': Tile,
  },
}
</script>

<template lang="pug">
#WeatherAtSite
  .site-title: span {{ prop.siteName }}
  Weather-Tile(v-for='wether in prop.weathers' :hourlyWeather='wether')/
</template>

<style scoped lang="scss">
#WeatherAtSite {
  width: fit-content;
  height: 48px;
  display: flex;
  flex-direction: row;

  .site-title,
  .site-title span {
    display: flex;
    text-justify: center;
    text-align: center;
    min-width: 120px;
  }
  .site-title span {
    justify-content: center;
    flex-direction: column;
  }
}
</style>
