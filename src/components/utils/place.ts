#!/usr/bin/env node
import { Coordinate } from './coordinate'

export class Place {
  _name: string = ''

  public coordinate: Coordinate | null = null

  constructor(
    name: string,
    lat?: number,
    lng?: number,
    isRadians: boolean = false,
  ) {
    this.name = name
    if (lat != null && lng != null) {
      this.coordinate = new Coordinate(lat, lng, isRadians)
    }
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get MarkerOptions(): google.maps.MarkerOptions {
    return {
      label: this.name,
      position:
        this.coordinate !== null
          ? { lat: this.coordinate?.lat, lng: this.coordinate?.lng }
          : null,
      clickable: true,
      draggable: true,
      optimized: true,
    }
  }
}
