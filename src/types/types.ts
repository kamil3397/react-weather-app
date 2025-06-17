export interface LocationData {
  name: string;
  country: string;
}

export interface CurrentData {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
  humidity: number;
  wind_kph: number;
}

export interface WeatherResponse {
  location: LocationData;
  current: CurrentData;
}

export interface WeatherData {
  location: {
    // czemu nie uzyles tu LocationData? to jakis inny typ?
    name: string;
    country: string;
  };
  current: {
    // czemu nie uzyles tu CurrentData? to jakis inny typ?
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
}
