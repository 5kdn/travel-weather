#!/usr/bin/env node
import { describe, expect, test } from 'vitest'
import { WeatherIcon } from '@/components/utils/Weather/WeatherIcon'
import { HourlyWeather } from '@/components/utils/Weather/HourlyWeather'


test('初期値', () => {
  const actual = new HourlyWeather(null, null, null, null)
  expect(actual.time          ).toBe(null)
  expect(actual.icon          ).toBe(WeatherIcon.NA)
  expect(actual.temperture    ).toBe(null)
  expect(actual.chanceOfRain).toBe(null)
})

test('Time', () => {
  const d = new Date(2000, 2, 3, 4, 56)
  const actual = new HourlyWeather(d, null, null, null).time
  expect(actual).not.toBeNull()
  if(actual === null) return
  expect(actual.getFullYear()).toBe(2000)
  expect(actual.getMonth()).toBe(2)
  expect(actual.getDate()).toBe(3)
  expect(actual.getHours()).toBe(4)
})


describe('Icon', () => {
  test.each([
    ['Fine'],
    [WeatherIcon.Fine]
  ])('Fine', (val) => {
    const hw = new HourlyWeather(null, val, null, null)
    expect(hw.icon).toBe(WeatherIcon.Fine)
  })

  test.each([
    ['Cloud'],
    [WeatherIcon.Cloud]
  ])('Cloud', (val) => {
    const hw = new HourlyWeather(null, val, null, null)
    expect(hw.icon).toBe(WeatherIcon.Cloud)
  })

  test.each([
    ['Fog'],
    [WeatherIcon.Fog]
  ])('Fog', (val) => {
    const hw = new HourlyWeather(null, val, null, null)
    expect(hw.icon).toBe(WeatherIcon.Fog)
  })

  test.each([
    ['Shower'],
    [WeatherIcon.Shower]
  ])('Shower', (val) => {
    const hw = new HourlyWeather(null, val, null, null)
    expect(hw.icon).toBe(WeatherIcon.Shower)
  })

  test.each([
    ['Rain'],
    [WeatherIcon.Rain]
  ])('Rain', (val) => {
    const hw = new HourlyWeather(null, val, null, null)
    expect(hw.icon).toBe(WeatherIcon.Rain)
  })

  test.each([
    ['Snow'],
    [WeatherIcon.Snow]
  ])('Snow', (val) => {
    const hw = new HourlyWeather(null, val, null, null)
    expect(hw.icon).toBe(WeatherIcon.Snow)
  })
  test.each([
    ['DayShower'],
    [WeatherIcon.DayShower]
  ])('DayShower', (val) => {
    const hw = new HourlyWeather(null, val, null, null)
    expect(hw.icon).toBe(WeatherIcon.DayShower)
  })
  test.each([
    ['DaySnow'],
    [WeatherIcon.DaySnow]
  ])('DaySnow', (val) => {
    const hw = new HourlyWeather(null, val, null, null)
    expect(hw.icon).toBe(WeatherIcon.DaySnow)
  })
  test.each([
    ['Thunderstorm'],
    [WeatherIcon.Thunderstorm]
  ])('Thunderstorm', (val) => {
    const hw = new HourlyWeather(null, val, null, null)
    expect(hw.icon).toBe(WeatherIcon.Thunderstorm)
  })
  test.each([
    ['NA'],
    [WeatherIcon.NA],
    [null]
  ])('NA', (val) => {
    const hw = new HourlyWeather(null, val, null, null)
    expect(hw.icon).toBe(WeatherIcon.NA)
  })
})
