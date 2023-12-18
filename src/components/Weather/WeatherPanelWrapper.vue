<script lang="ts" setup>
import { computed, defineComponent, ref, withDefaults } from 'vue'
import { usePlaceStore } from '@/store/places'
import WeatherPanel from './WeatherPanel.vue'

const store = usePlaceStore()
const places = computed(() => store.getAllPlaces)
</script>

<template lang="pug">
h1 WPW
#WeatherPanel-Wrapper
  Weather-Panel(:sites='places' :timeline='()=>[]')/
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
