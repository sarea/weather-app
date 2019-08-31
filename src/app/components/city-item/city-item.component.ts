import { Component, Input } from '@angular/core';
import { CurrentWeatherDataResponse } from '@@lib/models';
import { OwmApiService, UtilsService } from '@@lib/services';

@Component({
  selector: 'owm-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss'],
})
export class CityItemComponent {

  @Input() public cityWeather: CurrentWeatherDataResponse;

  constructor(
    public owmApiService: OwmApiService,
    public utilService: UtilsService,
  ) { }

}
