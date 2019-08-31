import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsComponent } from './city-details.component';
import { OwmApiService, UtilsService } from '@@lib/services';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('CityDetailsComponent', () => {
  let component: CityDetailsComponent;
  let fixture: ComponentFixture<CityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailsComponent ],
      providers: [
        {
          provide: OwmApiService,
          useValue: { getHourlyWeather: () => of('') },
        },
        {
          provide: UtilsService,
          useValue: {
            getRoundedNumber: () => 21,
            mileToKilometer: () => 6,
            getIconUrl: () => '../../../assets/icons/wind.svg',
            secondsToTime: () => '10:00am',
            getDateTime: () => 'Fri Aug 30 2019',
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap: of({
              has: () => true,
              get: () => 'city'
            })
          }
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
