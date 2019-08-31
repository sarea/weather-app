import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeatherDataResponse, HourlyWeatherDataResponse } from '@@lib/models';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwmApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  /**
   * Get the current wither data by city name
   * @param city city name.
   * @returns CurrentWeatherDataResponse
   */
  public getCurrentWeather (city: string): Observable<CurrentWeatherDataResponse> {
    return this.httpClient.get<CurrentWeatherDataResponse>(`${env.OWM_URL}/weather?q=${city}&units=metric&appId=${env.OWM_API_KEY}`);
  }

  /**
   * Get 5 days/3 hours forecast for city
   * @param city city name.
   * @returns HourlyWeatherDataResponse
   */
  public getHourlyWeather (city: string): Observable<HourlyWeatherDataResponse> {
    return this.httpClient.get<HourlyWeatherDataResponse>(`${env.OWM_URL}/forecast?q=${city}&units=metric&appId=${env.OWM_API_KEY}`);
  }

  /**
   * Get the icon id which is provided from `getCurrentWeather()` request as param
   * Then get the get icon URL
   * see `https://openweathermap.org/weather-conditions` for more info
   * @param icon icon id.
   * @returns the url as string
   */
  public getWeatherUrl (icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

}
