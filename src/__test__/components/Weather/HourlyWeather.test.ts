#!/usr/bin/env node
import { describe, expect, test } from 'vitest'
import { WeatherIcon } from '@/components/utils/Weather/WeatherIcon'
import { HourlyWeather } from '@/components/utils/Weather/HourlyWeather'

test('初期値', () => {
  const actual = new HourlyWeather(null, null, null, null)
  expect(actual.time).toBe(null)
  expect(actual.icon).toBe('NA')
  expect(actual.temperture).toBe(null)
  expect(actual.chanceOfRain).toBe(null)
})

test('Time', () => {
  const d = new Date(2000, 2, 3, 4, 56)
  const actual = new HourlyWeather(d, null, null, null).time
  expect(actual).not.toBeNull()
  if (actual === null) return
  expect(actual.getFullYear()).toBe(2000)
  expect(actual.getMonth()).toBe(2)
  expect(actual.getDate()).toBe(3)
  expect(actual.getHours()).toBe(4)
})

describe('Icon', () => {
  test('Fine', () => {
    const hw = new HourlyWeather(null, 'Fine', null, null)
    expect(hw.icon).toBe('Fine')
  })

  test('Cloudy', () => {
    const hw = new HourlyWeather(null, 'Cloudy', null, null)
    expect(hw.icon).toBe('Cloudy')
  })

  test('Foggy', () => {
    const hw = new HourlyWeather(null, 'Foggy', null, null)
    expect(hw.icon).toBe('Foggy')
  })

  test('Drizzle', () => {
    const hw = new HourlyWeather(null, 'Drizzle', null, null)
    expect(hw.icon).toBe('Drizzle')
  })

  test('FreezingDrizzle', () => {
    const hw = new HourlyWeather(null, 'FreezingDrizzle', null, null)
    expect(hw.icon).toBe('FreezingDrizzle')
  })

  test('Rainy', () => {
    const hw = new HourlyWeather(null, 'Rainy', null, null)
    expect(hw.icon).toBe('Rainy')
  })

  test('FreezingRain', () => {
    const hw = new HourlyWeather(null, 'FreezingRain', null, null)
    expect(hw.icon).toBe('FreezingRain')
  })

  test('Snowy', () => {
    const hw = new HourlyWeather(null, 'Snowy', null, null)
    expect(hw.icon).toBe('Snowy')
  })

  test('RainShower', () => {
    const hw = new HourlyWeather(null, 'RainShower', null, null)
    expect(hw.icon).toBe('RainShower')
  })

  test('SnowShower', () => {
    const hw = new HourlyWeather(null, 'SnowShower', null, null)
    expect(hw.icon).toBe('SnowShower')
  })

  test('Thunderstorm', () => {
    const hw = new HourlyWeather(null, 'Thunderstorm', null, null)
    expect(hw.icon).toBe('Thunderstorm')
  })
  test('NA', () => {
    const hw = new HourlyWeather(null, 'NA', null, null)
    expect(hw.icon).toBe('NA')
  })

  test('null', () => {
    const hw = new HourlyWeather(null, null, null, null)
    expect(hw.icon).toBe('NA')
  })
})
