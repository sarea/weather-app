import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { first, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HourlyWeatherDataResponse } from '@@lib/models';
import { OwmApiService, UtilsService } from '@@lib/services';

@Component({
  selector: 'owm-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  public hourlyResponse$: Observable<HourlyWeatherDataResponse>;
  public hourlyResponseError: string;

  constructor(
    private route: ActivatedRoute,
    public owmApiService: OwmApiService,
    public utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      first((paramMap: ParamMap) => paramMap.has('city') && !!paramMap.get('city')),
      map((paramMap: ParamMap) =>  paramMap.get('city')),
      map(city => this.owmApiService.getHourlyWeather(city).pipe(
        catchError(error => {
          this.hourlyResponseError = 'Something bad happened, please try again later!';
          return throwError(new Error(error));
        })
      )),
      map(response => {
        this.hourlyResponse$ = response;
      })
    ).subscribe();
  }

}
