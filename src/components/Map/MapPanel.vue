<script setup lang="ts">
import { computed, defineComponent, ref, withDefaults } from 'vue'
import { Place } from '@/components/utils/place'
import { usePlaceStore } from '@/store/places'
import MapLoader from './MapLoader.vue'

const store = usePlaceStore()
const places = computed(() => store.getAllPlaces)

const isReduction = ref(false) // #MapPanelが縮小しているかを判定する変数

const toggleReduction = (): void => {
  isReduction.value = !isReduction.value
}

const addPlaces = (place: Place) => {
  places.value.push(place)
}
</script>

<script lang="ts">
export default defineComponent({
  components: {
    MapLoader,
  },
})
</script>

<template lang="pug">
#MapPanel-Wrapper(:class='{reduction: isReduction}')
  #MapPanel(:class="{reduction: isReduction}")
    MapLoader(:places="places" @newval="$event => addPlaces($event)")
  #ReductionButton(@click='toggleReduction')
      #ReductionButton-Base
      v-icon#ReductionButton-Icon(
        icon="mdi-chevron-double-up"
        :class='{reduction: isReduction}')
</template>

<style lang="scss" scoped>
@use 'sass:math';

// $map-height: 300px;
$map-height: 50vh;
$reduction-ratio: 0.3;
$button-width: 32px;
$button-height: 48px;
$button-offset-right: 5px;
$button-border-width: 2px;
$button-outside-color: #ddd;
$button-inner-color: lighten($button-outside-color, 30);

#MapPanel-Wrapper {
  display: block;
  width: 100%;
  height: $map-height;
  transition: all 300ms 0s ease;
  position: relative;
  overflow: hidden;
  &.reduction {
    transition: all 300ms 0s ease;
    height: $map-height * $reduction-ratio;
  }
  #MapPanel {
    height: $map-height;
    transition: all 300ms 0s ease;
    &.reduction {
      transition: all 300ms 0s ease;
      height: $map-height * $reduction-ratio;
    }
  }
  #ReductionButton {
    position: absolute;
    right: $button-offset-right;
    bottom: 0;
    &:hover #ReductionButton-Base {
      background-color: darken($button-outside-color, 5);
    }
    #ReductionButton-Base {
      background: $button-outside-color;
      width: $button-width;
      height: $button-height;
      border-radius: math.div($button-width, 2) math.div($button-width, 2) 0 0;
    }
    #ReductionButton-Icon {
      background-color: $button-inner-color;
      width: $button-width - 2 * $button-border-width;
      height: $button-width - 2 * $button-border-width;
      position: absolute;
      right: $button-border-width;
      bottom: $button-height - $button-width + $button-border-width;
      border-radius: 50%;
      &.reduction {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
