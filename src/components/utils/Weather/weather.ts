#!/usr/bin/env node
import { fetchWeatherApi } from 'openmeteo'
import type { WeatherApiResponse } from '@openmeteo/sdk/weather-api-response'
import { HourlyWeather } from './HourlyWeather'
import { Place } from '../place'

interface Site {lat: number, lng: number,}

export interface ConvWeatherFromResp {
  temp: Float32Array
  precipitation: Float32Array,
  code: Float32Array,
}

export interface getWeatherFromMeteo {
  time: Array<Date>
  weathers: Array<ConvWeatherFromResp>
}

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

const convLatLngStyle = (
  sites: Array<Site>
): { lat: string, lng: string } => {
  const lat = [] as Array<string>
  const lng = [] as Array<string>
  sites.forEach((site) => {
    if (site.lat != null && site.lng != null) {
      lat.push(site.lat.toString())
      lng.push(site.lng.toString())
    }
  })
  return { lat: lat.join(','), lng: lng.join(',')}
}

const convLatLngStyleFromPlace = (
  places: Array<Place>
): { lat: string, lng: string } => {
  const lat = [] as Array<string>
  const lng = [] as Array<string>
  places.forEach((place) => {
    const {coordinate} = place
    if (coordinate != null) {
      lat.push(coordinate.lat.toString())
      lng.push(coordinate.lng.toString())
    }
  })
  return { lat: lat.join(','), lng: lng.join(',')}
}

const convWeatherFromResp = (resp: WeatherApiResponse): ConvWeatherFromResp => {
  const hourly = resp.hourly()!

  const temp: Float32Array = hourly.variables(0)!.valuesArray()!
  const precipitation: Float32Array = hourly.variables(0)!.valuesArray()!
  const code: Float32Array = hourly.variables(0)!.valuesArray()!

  return { temp, precipitation, code }
}

const convWMOCode2String = (code: number | null):
  | 'Fine'
  | 'Cloudy'
  | 'Foggy'
  | 'Drizzle'
  | 'FreezingDrizzle'
  | 'Rainy'
  | 'FreezingRain'
  | 'Snowy'
  | 'RainShower'
  | 'SnowShower'
  | 'Thunderstorm'
  | 'NA' => {
  switch (code) {
    // 0	Clear sky
    case 0: return 'Fine'
    // 1, 2, 3	Mainly clear, partly cloudy, and overcast
    case 1: return 'Cloudy'
    case 2: return 'Cloudy'
    case 3: return 'Cloudy'
    // 45, 48	Fog and depositing rime fog
    case 45: return 'Foggy'
    case 48: return 'Foggy'
    // 51, 53, 55	Drizzle: Light, moderate, and dense intensity
    case 51: return 'Drizzle'
    case 53: return 'Drizzle'
    case 55: return 'Drizzle'
    // 56, 57	Freezing Drizzle: Light and dense intensity
    case 56: return 'FreezingDrizzle'
    case 57: return 'FreezingDrizzle'
    // 61, 63, 65	Rain: Slight, moderate and heavy intensity
    case 61: return 'Rainy'
    case 63: return 'Rainy'
    case 65: return 'Rainy'
    // 66, 67	Freezing Rain: Light and heavy intensity
    case 66: return 'FreezingRain'
    case 67: return 'FreezingRain'
    // 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
    // 77	Snow grains
    case 71: return 'Snowy'
    case 73: return 'Snowy'
    case 75: return 'Snowy'
    case 77: return 'Snowy'
    // 80, 81, 82	Rain showers: Slight, moderate, and violent
    case 80: return 'RainShower'
    case 81: return 'RainShower'
    case 82: return 'RainShower'
    // 85, 86	Snow showers slight and heavy
    case 85: return 'SnowShower'
    case 86: return 'SnowShower'
    // 95 *	Thunderstorm: Slight or moderate
    // 96, 99 *	Thunderstorm with slight and heavy hail
    case 95: return 'Thunderstorm'
    case 96: return 'Thunderstorm'
    case 99: return 'Thunderstorm'
    default: return'NA'
  }
}

const convWeatherFromResp2HourlyWeather = (
  resp: WeatherApiResponse): HourlyWeather[] => {

  const hourly = resp.hourly()!
  const temp: Float32Array = hourly.variables(0)!.valuesArray()!
  const precipitation: Float32Array = hourly.variables(1)!.valuesArray()!
  const code: Float32Array = hourly.variables(2)!.valuesArray()!

  const hourlyWeathers = [] as Array<HourlyWeather>
  for (let index = 0; index < code.length; index += 1) {
    hourlyWeathers.push(
      new HourlyWeather(
        null,
        convWMOCode2String(code[index]),
        temp[index],
        precipitation[index]
      )
    )
  }
  return hourlyWeathers
}

const getTime = (resp: WeatherApiResponse): Array<Date> => {
  const utcOffsetSeconds = resp.utcOffsetSeconds()
  const hourly = resp.hourly()!
  return range(
    Number(hourly.time()),
    Number(hourly.timeEnd()),
    hourly.interval(),
  ).map((t) => new Date((t + utcOffsetSeconds) * 1000))
}

export const getWeatherFromMeteo = async (
  sites: Array<Site>,
): Promise<getWeatherFromMeteo> => {
  const position = convLatLngStyle(sites)
  const url = 'https://api.open-meteo.com/v1/forecast'
  const params = {
    latitude: position.lat,
    longitude: position.lng,
    hourly: ['temperature_2m', 'precipitation', 'weather_code'],
    timezone: 'Asia/Tokyo',
    forecast_days: 1,
  }
  const resp = await fetchWeatherApi(url, params)
  const ret: Array<ConvWeatherFromResp> = []

  resp.forEach((res) => {
    ret.push(convWeatherFromResp(res))
  })
  return {
    time: getTime(resp[0]),
    weathers: ret,
  }
}

export const getWeatherFromMeteoHourlyWeather = async (
  sites: Array<Site>,
): Promise<[Date[], HourlyWeather[][]]> => {
  const position = convLatLngStyle(sites)
  if(position.lat === '' || position.lng === '') return [[], []]
  const url = 'https://api.open-meteo.com/v1/forecast'
  const params = {
    latitude: position.lat,
    longitude: position.lng,
    hourly: ['temperature_2m', 'precipitation', 'weather_code'],
    timezone: 'Asia/Tokyo',
    forecast_days: 1,
  }
  const resp = await fetchWeatherApi(url, params)
  const ret: Array<Array<HourlyWeather>> = []
  resp.forEach((res) => {
    ret.push(convWeatherFromResp2HourlyWeather(res))
  })
  return [getTime(resp[0]), ret]
}
