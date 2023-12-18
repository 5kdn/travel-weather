<script setup lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { GoogleMap, Marker, MarkerCluster, InfoWindow } from 'vue3-google-map'
import { Coordinate } from '@/components/utils/coordinate'
import { Place } from '@/components/utils/place'
import { calcCenterPoint, calcZoomlevel } from '../utils/Map/maps'

const apikey = import.meta.env.VITE_GOOGLEMAP_API_KEY
const myMapRef = ref()

const props = withDefaults(defineProps<{ places?: Array<Place> }>(), {
  places: () => [] as Array<Place>,
})
const emits = defineEmits(['newval'])

const center = ref(calcCenterPoint(props.places.map(place => place.coordinate)))

const zoom = ref(calcZoomlevel(props.places.map(place => place.coordinate)))

interface InfoItem {
  isShow: boolean
  position?: {
    lat: number
    lng: number
  }
}
const infoItem = ref<InfoItem>({ isShow: false })

/**
 * @description クリックした座標を取得する
 * @param {google.maps.MapMouseEvent} event mouse event
 * @returns {*}  {Coordinate} クリックされた座標
 */
const getLatLng = (event: google.maps.MapMouseEvent): Coordinate => {
  const ll = event.latLng
  if (ll == null) throw Error('')
  return new Coordinate(ll.lat, ll.lng)
}

/**
 * @description マップ上でクリックしたときのイベントリスナー
 * @param {google.maps.MapMouseEvent} event mouse event
 */
const OnClickMapEventListner = (event: google.maps.MapMouseEvent): void => {
  if (event.latLng == null) return
  infoItem.value = {
    isShow: true,
    position: { lat: event.latLng.lat(), lng: event.latLng.lng() },
  }
}

/**
 * @description Addボタンを押したときのイベント
 * @param {number} lat latitude
 * @param {number} lng longitude
 * @param {string} label name of place
 */
const onClickAddBtnEvent = (): void => {
  if (infoItem.value.position == null) return

  sendItem(infoItem.value.position.lat, infoItem.value.position.lng)
  infoItem.value.isShow = false
}

/**
 * @description 親要素に新要素の追加を通知する
 */
const sendItem = (
  lat: number,
  lng: number,
  label: string = 'new place',
): void => {
  emits('newval', new Place(label, lat, lng))
}
</script>

<script lang="ts">
export default defineComponent({
  components: {
    GoogleMap,
    'GMap-Marker-Cluster': MarkerCluster,
    'GMap-Marker': Marker,
  },
})
</script>

<template lang="pug">
#map-wrapper
  GoogleMap(
    class="map"
    :api-key="apikey"
    :center="{lat: center.lat, lng: center.lng}"
    :zoom="zoom"
    ref="myMapRef"
    :disable-default-ui="true"
    :clickable-icons="false"
    @click="($event) => OnClickMapEventListner($event)"
  )
    GMap-Marker-Cluster
      GMap-Marker(
        v-for="place in props.places"
        :options="place.MarkerOptions")/
    InfoWindow(
      v-if="infoItem.isShow"
      :options="{position: infoItem.position}")
      v-btn(
        prepend-icon="mdi-plus-circle-outline"
        color="error"
        @click="onClickAddBtnEvent()") Add
</template>

<style scoped lang="scss">
#map-wrapper {
  height: 100%;
  width: 100%;
}
.map {
  position: relative;
  height: 100%;
}
</style>
