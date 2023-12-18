<!-- eslint-disable no-console -->
<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { usePlaceStore } from '@/store/places'
import PanelVue from './Panel.vue'

const store = usePlaceStore()
const places = computed(() => store.getAllPlaces)
const sites = ref<Array<{ lat: number | null; lng: number | null }>>([])
watch(
  places,
  () => {
    console.log('changed')
    sites.value = places.value.map(place => {
      const { coordinate } = place
      if (coordinate == null) return { lat: null, lng: null }
      return {
        lat: coordinate.lat,
        lng: coordinate.lng,
      }
    })
  },
  { deep: true },
)
</script>

<template lang="pug">
#Panel-Wrapper
  Panel-Vue(:sites='sites')/
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
