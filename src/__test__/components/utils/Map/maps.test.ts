#!/usr/bin/env node
import { describe, expect, it } from 'vitest'
import { calcCenterPoint, calcZoomlevel } from '@/components/utils/Map/maps'
import { Coordinate } from '@/components/utils/coordinate'

describe('calcCenterPoint', () => {
  it.each`
    lat   | lng    | expLat | expLng
    ${0}  | ${0}   | ${0}   | ${0}
    ${30} | ${30}  | ${30}  | ${30}
    ${90} | ${180} | ${90}  | ${180}
  `(
    'single point (lat:$lat, lng: $lng) -> (lat: $expLat, lng: $expLng)',
    ({ lat, lng, expLat, expLng }) => {
      const place = [new Coordinate(lat, lng)]
      const actual = calcCenterPoint(place)
      expect(actual.lat).toBeCloseTo(expLat, 8)
      expect(actual.lng).toBeCloseTo(expLng, 8)
    },
  )

  it.each([
    {
      places: [
        [30, 30],
        [-30, -30],
      ],
      expected: { lat: 0, lng: 0 },
    },
  ])('multi point', item => {
    const places = [] as Array<Coordinate>
    item.places.forEach(([lat, lng]) => {
      places.push(new Coordinate(lat, lng))
    })
    const actual = calcCenterPoint(places)
    expect(actual.lat).toBeCloseTo(item.expected.lat, 8)
    expect(actual.lng).toBeCloseTo(item.expected.lng, 8)
  })

  it.each([
    {
      places: [
        [30, 30],
        [-30, -30],
      ],
      expected: { lat: 0, lng: 0 },
    },
  ])('multi point w/ null', item => {
    const places = [] as Array<Coordinate | null>
    item.places.forEach(([lat, lng]) => {
      places.push(new Coordinate(lat, lng))
    })
    places.push(null)
    const actual = calcCenterPoint(places)
    expect(actual.lat).toBeCloseTo(item.expected.lat, 8)
    expect(actual.lng).toBeCloseTo(item.expected.lng, 8)
  })
})

describe('calcZoomlevel', () => {
  it('minimum level', () => {
    const place = [new Coordinate(0, 0)]
    const actual = calcZoomlevel(place)
    expect(actual).toBeGreaterThanOrEqual(0)
  })
})
