<script lang="ts" setup>
import { SiteWeather } from '../utils/Weather/SiteWeather'
import Site from './Site.vue'

export interface Props {
  sites: Array<SiteWeather>
  timeline: Array<Date>
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  sites: () => [],
})
</script>

<script lang="ts">
export default {
  components: {
    'Weather-Site': Site,
  },
}
</script>

<template lang="pug">
#WeatherPanel-Wrapper
  #timeline-ribbon
    .ribbon-item(v-for='item in timeline')
      .date {{item.getMonth()}}/{{item.getDate()}}
      .hour {{item.getHours()}}:00
  #WeatherPanel
    Weather-Site(v-for='site in sites' :prop='site')/
</template>

<style scoped lang="scss">
#WeatherPanel-Wrapper {
  background-color: aquamarine;
  width: 100%;
  height: fix-content;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  #timeline-ribbon {
    background: aqua;
    display: flex;
    width: fit-content;
    .ribbon-item {
      width: 48px;
      background: gray;
      &:first-child {
        background: red;
        margin-left: 120px;
      }
    }
  }
  #WeatherPanel {
    width: fit-content;
    height: fit-content;
  }
}
</style>
