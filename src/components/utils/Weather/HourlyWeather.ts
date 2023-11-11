#!/usr/bin/env node
import { WeatherIcon } from './WeatherIcon'

export class HourlyWeather {
  private _time: Date | null = null

  private _icon: WeatherIcon = WeatherIcon.NA

  private _temperture: number | null = null

  private _chanceOfRain: number | null = null

  constructor (
    time: Date | null,
    icon: WeatherIcon | string | null,
    temperture: number | null,
    chanceOfRain: number | null,
    ) {
      this.time = time
      this.icon = icon
      this.temperture = temperture
      this.chanceOfRain = chanceOfRain
    }


    public get time() : Date | null {
      return this._time
    }

    public set time(v : Date | null) {
      this._time = v;
    }

    public get icon() : WeatherIcon {
      return this._icon
    }

    public set icon(v: WeatherIcon | string | null) {
      if (v === null) {
        this._icon = WeatherIcon.NA
      } else if (typeof v === 'string') {
        const val: number | undefined = WeatherIcon[v]
        if (typeof val === 'undefined') {
          this._icon = WeatherIcon.NA
        } else {
          this._icon = val
        }
      } else {
        this._icon = v
      }
    }

    public get temperture(): number | null {
      return this._temperture
    }

    public set temperture(v: number | null) {
      this._temperture = v
    }

    public get chanceOfRain(): number | null {
      return this._chanceOfRain
    }

    public set chanceOfRain(v: number | null) {
      this._chanceOfRain = v
    }
  }
