interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface MainHourly extends Main {
  grnd_level: number;
  sea_level: number;
  temp_kf: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type?: number;
  id: number;
  message?: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface City extends Sys {
  coord: Coord;
  name: string;
  population: number;
  timezone: number;
}

export interface List {
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  main: MainHourly;
  sys: { pod: string };
  weather: Weather[];
  wind: Wind;
}

export interface CurrentWeatherDataResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

export interface HourlyWeatherDataResponse {
  city: City;
  cnt: number;
  cod: string;
  list: List[];
  message: number;
}
