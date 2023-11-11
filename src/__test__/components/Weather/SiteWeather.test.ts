#!/usr/bin/env node
import { test, expect } from 'vitest'
import { HourlyWeather } from '@/components/utils/Weather/HourlyWeather'
import { SiteWeather } from '@/components/utils/Weather/SiteWeather'


test('初期値', () => {
    const actual = new SiteWeather(null, [])
    const expectedName = '-'
    const expectedWeather = [] as Array<HourlyWeather>
    expect(actual.siteName).toBe(expectedName)
    expect(actual.weathers).toStrictEqual(expectedWeather)
})
