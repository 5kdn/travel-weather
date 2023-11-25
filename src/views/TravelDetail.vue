<script lang="ts" setup>
import { defineComponent, reactive } from 'vue'
import MapPanel from '@/components/Map/MapPanel.vue'
import WeatherPanelWrapper from '@/components/Weather/PanelWrapper.vue'
</script>
<script lang="ts">
export default defineComponent({
  components: {
    'map-panel': MapPanel,
    'weather-panel': WeatherPanelWrapper,
  },
})
</script>

<template lang="pug">
#wrapper
  map-panel/
  weather-panel/
</template>

<style scoped lang="scss">
#wrapper {
  background-color: bisque; // TODO: debug
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
