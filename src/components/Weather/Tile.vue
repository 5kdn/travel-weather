<!-- eslint-disable import/no-unresolved -->
<!-- eslint-disable import/extensions -->
<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WeatherIcon } from '../utils/Weather/WeatherIcon'
import { HourlyWeather } from "../utils/Weather/HourlyWeather"
import Fine from "~icons/wi/day-sunny"
import Cloud from "~icons/wi/cloud"
import Fog from "~icons/wi/fog"
import Shower from "~icons/wi/showers"
import Rain from "~icons/wi/rain"
import Snow from "~icons/wi/snow"
import DayShower from "~icons/wi/day-showers"
import DaySnow from "~icons/wi/day-snow"
import Thunderstorm from "~icons/wi/thunderstorm"
import NA from "~icons/wi/na"

export interface Props {
  hourlyWeather?: HourlyWeather,
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  hourlyWeather: () => new HourlyWeather(null, null, null, null)
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getIconComponent = () => {
  let ret
  switch(WeatherIcon[props.hourlyWeather.icon]){
    case 'Fine':
      ret = Fine
      break
    case 'Cloud':
      ret = Cloud
      break
    case 'Fog':
      ret = Fog
      break
    case 'Shower':
      ret = Shower
      break
    case 'Rain':
      ret = Rain
      break
    case 'Snow':
      ret = Snow
      break
    case 'DayShower':
      ret = DayShower
      break
    case 'DaySnow':
      ret = DaySnow
      break
    case 'Thunderstorm':
      ret = Thunderstorm
      break
    default:
      ret = NA
  }
  return ret
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getIconClass = ():string => {
  if(props.hourlyWeather.icon === null) {return 'NA'}
  return WeatherIcon[props.hourlyWeather.icon]
}
</script>

<script lang="ts">
export default {
    components: {
        Fine,
        Cloud,
        Fog,
        Shower,
        Rain,
        Snow,
        DayShower,
        DaySnow,
        Thunderstorm,
        NA,
    }
}
</script>


<template lang="pug">
.hourly_item
  component.icon(:is='getIconComponent()' :class='getIconClass()')
  .description
    .temp
      NA(v-if='hourlyWeather.temperture === null')
      span(v-else) {{ hourlyWeather.temperture }}
    .separator: span /
    .chance_of_rain
      NA(v-if='hourlyWeather.chance_of_rain === null')
      span(v-else) {{ hourlyWeather.chance_of_rain }}
</template>


<style lang="scss" scoped>
$item_size: 48px;
$icon_height: 30px;
$text_size: 5pt;
$separator_size: 8pt;

.hourly_item{
    width: $item_size;
    height: $item_size;
    display: flex;
    flex-direction: column;

    .icon{
        height: $icon_height;
        &.Fine{color:red;}
        &.Cloud {color:gray;}
        &.Fog {color:cadetblue;}
        &.Shower {color:cadetblue;}
        &.Rain {color:cadetblue;}
        &.Snow {color:cadetblue;}
        &.DayShower {color:cadetblue;}
        &.DaySnow {color:cadetblue;}
        &.Thunderstorm {color:gray;}
        &.NA {color:darkslategray;}
    }
    .description{
        flex-grow: 1;
        display: flex;
        text-justify: center;
        text-align: center;

        .temp, .chance_of_rain, .separator{
            display: flex;
            align-items: center;
            text-align: center;
            span{
                width: 100%;
            }
        }
        .temp, .chance_of_rain{
            flex-grow: 1;
            justify-content: center;
            align-items: center;
            font-size: $text_size;
        }
        .separator{
            font-size: $separator_size;
        }
        .temp>span::after{
            content: "℃";
        }
        .chance_of_rain>span::after{
            content: "%";
        }
    }
}
</style>
