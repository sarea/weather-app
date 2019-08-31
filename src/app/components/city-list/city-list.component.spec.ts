import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListComponent } from './city-list.component';
import { OwmApiService } from '@@lib/services';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('CityListComponent', () => {
  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityListComponent ],
      providers: [
        {
          provide: OwmApiService,
          useValue: { getCurrentWeather: () => of('') },
        },
        {
          provide: Router,
          useValue: { navigate: () => {} },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
