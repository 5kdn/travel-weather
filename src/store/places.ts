import { defineStore } from 'pinia'
import { Place } from '@/components/utils/place'

const defaultPlaces: Array<Place> = [] as Array<Place>

export const usePlaceStore = defineStore('PlaceStore', {
  state: () => ({
    items: defaultPlaces,
  }),
  getters: {
    getAllPlaces: (state): Array<Place> => state.items,
  },
  actions: {
  },
})
