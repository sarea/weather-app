import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { cityList } from '@@lib/constants';
import { CurrentWeatherDataResponse } from '@@lib/models';
import { OwmApiService } from '@@lib/services';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'owm-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  public citiesCurrentWeather$: Observable<CurrentWeatherDataResponse[]>;

  constructor (
    private owmApiService: OwmApiService,
    private router: Router,
  ) {}

  ngOnInit () {
    // get the weather for list of cities
    this.citiesCurrentWeather$ = forkJoin(
      cityList.map(city =>
        this.owmApiService.getCurrentWeather(city)
          // this will be filtered from the view
          .pipe(catchError(error => of(undefined)))
      )
    );
  }

  /**
   * Navigate to city details page, with city name as queryParams
   * We need the city to fetch weather hourly
   * @param city city name.
   * @returns Promise<boolean>
   */
  public navigateToCityDetails (city: string): Promise<boolean> {
    return this.router.navigate(['/city-details'], {
      queryParams: { city }
    });
  }
}
