import { TestBed, inject } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {

  let utilsService: UtilsService;

  beforeEach(() => {
    utilsService = new UtilsService();
    TestBed.configureTestingModule({
      providers: [UtilsService]
    });
  });

  it('should be created', inject([UtilsService], (service: UtilsService) => {
    expect(service).toBeTruthy();
  }));

  it('#getDateTime should return real value', () => {
    expect(utilsService.getDateTime(1567166400)).toBe('Fri Aug 30 2019');
  });

  it('#getHours should return real value', () => {
    expect(utilsService.getHours(1567166400)).toBe(14);
  });

  it('#getIconUrl should return real value', () => {
    expect(utilsService.getIconUrl('wind')).toBe('../../../assets/icons/wind.svg');
  });

  it('#getRoundedNumber should return real value', () => {
    expect(utilsService.getRoundedNumber(1.7)).toBe(2);
    expect(utilsService.getRoundedNumber(1.2)).toBe(1);
  });

  it('#mileToKilometer should return real value', () => {
    expect(utilsService.mileToKilometer(1.4)).toBe(2);
    expect(utilsService.mileToKilometer(2.5)).toBe(4);
  });

  it('#secondsToTime should return real value', () => {
    expect(utilsService.secondsToTime(1567166400)).toBe('2:00pm');
  });

});
