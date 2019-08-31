import { HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { cityWeatherMock, hourlyWeatherMock, asyncError, errorResponse } from '@@lib/testing/mocks';
import { OwmApiService } from './owm-api.service';


describe('OwmApiService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let owmApiService: OwmApiService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    owmApiService = new OwmApiService(httpClientSpy as any);

    TestBed.configureTestingModule({
      providers: [
        OwmApiService,
        {
          provide: HttpClient,
          useValue: { get: () => of('') },
        },
      ],
    });
  });

  it('should be created', inject([OwmApiService], (service: OwmApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return expected cityWeather (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(of(cityWeatherMock));
    owmApiService.getCurrentWeather('city').subscribe(
      cityWeather => expect(cityWeather).toEqual(cityWeatherMock, 'expected response'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when getCurrentWeather returns a 404', () => {
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    owmApiService.getCurrentWeather('city').subscribe(
      response => fail('expected an error, not response'),
      error  => expect(error.status).toEqual(404)
    );
  });

  it('should return expected hourlyWeather (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(of(hourlyWeatherMock));
    owmApiService.getHourlyWeather('city').subscribe(
      hourlyWeather => expect(hourlyWeather).toEqual(hourlyWeatherMock, 'expected response'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when getHourlyWeather returns a 404', () => {
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    owmApiService.getHourlyWeather('city').subscribe(
      response => fail('expected an error, not response'),
      error  => expect(error.status).toEqual(404)
    );
  });

  it('#secondsToTime should return real value', () => {
    expect(owmApiService.getWeatherUrl('10d')).toBe('http://openweathermap.org/img/wn/10d@2x.png');
  });

});
