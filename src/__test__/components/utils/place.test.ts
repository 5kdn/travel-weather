#!/usr/bin/env node
import { describe, expect, it } from 'vitest'
import { Place } from '@/components/utils/place'
import { Coordinate } from '@/components/utils/coordinate'

describe('name', () => {
  it.each([
    ['', ''],
    ['abcd', 'abcd'],
    ['XYZZY', 'XYZZY'],
  ])('test name %s -> %s', (name, expected) => {
    const actual = new Place(name)
    expect(actual.name).toBe(expected)
  })

  it('test MarkerOpsions', () => {
    const actual = new Place('hoge', 0, 30)
    const expected = {
      label: 'hoge',
      position: {
        lat: 0,
        lng: 30,
      },
      clickable: true,
      draggable: true,
      optimized: true,
    }
    expect(actual.MarkerOptions).toMatchObject(expected)
  })
})
