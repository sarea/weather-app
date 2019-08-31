import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityItemComponent } from './city-item.component';
import { OwmApiService, UtilsService } from '@@lib/services';
import { cityWeatherMock } from '@@lib/testing/mocks';


describe('CityItemComponent', () => {
  let component: CityItemComponent;
  let fixture: ComponentFixture<CityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityItemComponent ],
      providers: [
        {
          provide: OwmApiService,
          useValue: { getWeatherUrl: () => 'http://openweathermap.org/img/wn/icon@2x.png' },
        },
        {
          provide: UtilsService,
          useValue: {
            getRoundedNumber: () => 32,
            mileToKilometer: () => 32,
            getIconUrl: () => 'someURL'
          },
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityItemComponent);
    component = fixture.componentInstance;

    component.cityWeather = cityWeatherMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
