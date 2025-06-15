export interface LocationData {
  name: string
  country: string
}

export interface CurrentData {
  temp_c: number
  condition: {
    text: string
    icon: string
  }
   humidity: number
    wind_kph: number
}

export interface WeatherResponse {
  location: LocationData
  current: CurrentData
}

export interface WeatherData {
  location: {
    name: string
    country: string
  }
  current: {
    temp_c: number
    condition: {
      text: string
      icon: string
    }
    humidity: number
    wind_kph: number
  }
}