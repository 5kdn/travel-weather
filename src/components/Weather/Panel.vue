<script lang="ts" setup>
import { ref, defineComponent, watchEffect } from 'vue'
import { getWeatherFromMeteoHourlyWeather } from '../utils/Weather/weather'
import { HourlyWeather } from '../utils/Weather/HourlyWeather'
import Tile from './Tile.vue'

const component = defineComponent({
  components: {
    Tile,
  },
})
export interface Props {
  sites: Array<{ lat: number; lng: number }>
}
// TODO: Placeに変更
const props = withDefaults(defineProps<Props>(), {
  sites: () => [],
})

const weather = ref<HourlyWeather[][]>([])
const time = ref<Date[]>([])

const getWeather = async () => {
  const [times, hourlyWeathers] = await getWeatherFromMeteoHourlyWeather(
    props.sites,
  )
  time.value = times
  weather.value = hourlyWeathers
}

watchEffect(async () => {
  [time.value, weather.value] =
    await getWeatherFromMeteoHourlyWeather(props.sites)
})
</script>

<template lang="pug">
v-btn(@click="getWeather") reload
hr/
#wrapper-flex
  #frame
    #timeline
      //- 左上のブランクセル
      .cell &nbsp;
      .cell(v-for="item in time")
        span {{ item.getMonth() }}/{{ item.getDate() }}
        span {{ item.getHours() }}
    #body
      .point(v-for="site in weather")
        .cell.point-name: span 地点名
        .cell(v-for="hw in site")
          Tile(:hourlyWeather="(hw instanceof HourlyWeather ? hw : undefined)")
</template>

<style lang="scss" scoped>
.cell {
  height: 48px;
  position: relative;
  width: 48px;
  &:hover {
    background-color: #aaa;
  }
}
.point {
  display: flex;
  flex-direction: row;
  .point-name {
    background-color: #cef;
    border-right: 1px solid black;
    box-sizing: border-box;
    min-width: max-content;
    left: 0;
    position: sticky;
    width: 120px;
    z-index: 10;
    h2 {
      width: 120px;
    }
  }
}

#wrapper-flex {
  height: 100%;
  width: 100%;
  overflow: scroll;
}

#timeline {
  background-color: #cef;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  width: fit-content;
  z-index: 100;

  .cell {
    display: flex;
    flex-direction: column;
    height: 3em;
    &:first-child {
      box-sizing: content-box;
      background-color: #cef;
      border-right: 1px solid black;
      left: 0;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    span {
      color: blue;
      text-align: center;
    }
  }
}

#timeline > div:nth-child(1),
#body div.cell.point-name {
  width: 126px;
}
</style>
