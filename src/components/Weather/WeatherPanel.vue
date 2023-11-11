<script lang='ts' setup>
import { SiteWeather } from '../utils/Weather/SiteWeather'
import Site from './Site.vue'

export interface Props {
  sites: Array<SiteWeather>,
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  sites: [] as Array<SiteWeather>,
})
</script>

<script lang='ts'>
export default {
  components: {
    'Weather-Site': Site,
  },
}
</script>

<template lang='pug'>
#WeatherPanel-Wrapper
  #WeatherPanel
    Weather-Site(v-for='site in sites' :prop='site')/
</template>

<style scoped lang='scss'>
#WeatherPanel-Wrapper{
  width: 100%;
  height: fix-content;
  overflow-y: auto;
  &::-webkit-scrollbar{
    display: none;
}
  #WeatherPanel{
    width: fit-content;
    height: fit-content;
  }
}
</style>
