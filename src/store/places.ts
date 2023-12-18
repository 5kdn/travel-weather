import { defineStore } from 'pinia'
import { Place } from '@/components/utils/place'
import { getPlaceName } from '@/components/utils/Map/maps'
import { Coordinate } from '@/components/utils/coordinate'

const defaultPlaces: Array<Place> = [] as Array<Place>

export const usePlaceStore = defineStore('PlaceStore', {
  state: () => ({
    items: defaultPlaces,
  }),
  getters: {
    getAllPlaces: (state): Array<Place> => state.items,
  },
  actions: {
    async push(lat: number, lng: number): Promise<void> {
      const name = await getPlaceName(new Coordinate(lat, lng))
      this.items.push(new Place(
        name != null ? name : "",
        lat,
        lng
      ))
    }
  },
})
