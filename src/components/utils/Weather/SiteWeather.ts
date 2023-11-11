#!/usr/bin/env node
import { HourlyWeather } from './HourlyWeather'

export class SiteWeather {
  private _siteName: string = ''

  private _weathers: Array<HourlyWeather> = [] as Array<HourlyWeather>

  constructor (
    siteName: string | null,
    weathers: HourlyWeather[] = []
    ) {
      this.siteName = siteName
      this.weathers = weathers
    }

    public get siteName() : string {
      return this._siteName
    }

    public set siteName(name: string | null) {
      if (typeof name === 'string'){
        this._siteName = name;
      } else {
        this._siteName = '-'
      }
    }

    public get weathers(): Array<HourlyWeather> {
      return this._weathers
    }

    public set weathers(weathers: Array<HourlyWeather>) {
      this._weathers = weathers
    }
  }
