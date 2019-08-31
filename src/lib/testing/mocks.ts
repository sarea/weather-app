import { HttpErrorResponse } from '@angular/common/http';
import { defer } from 'rxjs';
import { CurrentWeatherDataResponse, HourlyWeatherDataResponse } from '@@lib/models';

export const cityWeatherMock: CurrentWeatherDataResponse = {
    coord: {
        lon: 139,
        lat: 35
    },
    weather: [{
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n'
    }],
    base: 'stations',
    main: {
        temp: 289.92,
        pressure: 1009,
        humidity: 92,
        temp_min: 288.71,
        temp_max: 290.93
    },
    visibility: 32,
    wind: {
        speed: 0.47,
        deg: 107.538
    },
    clouds: {
        all: 2
    },
    dt: 1560350192,
    sys: {
        type: 3,
        id: 2019346,
        message: 0.0065,
        country: 'JP',
        sunrise: 1560281377,
        sunset: 1560333478
    },
    id: 1851632,
    name: 'Amsterdam',
    cod: 200
};

export const hourlyWeatherMock: HourlyWeatherDataResponse = {
    city: {
        id: 1851632, name: 'Amsterdam',
        coord: {lon: 138.933334, lat: 34.966671},
        country: 'JP',
        timezone: 32400,
        population: 32,
        sunrise: 243543,
        sunset: 214325
    },
    cod: '200',
    message: 0.0045,
    cnt: 38,
    list: [{
        dt: 1406106000,
        main: {
            temp: 298.77,
            temp_min: 298.77,
            temp_max: 298.774,
            pressure: 1005.93,
            sea_level: 1018.18,
            grnd_level: 1005.93,
            humidity: 87,
            temp_kf: 0.26
        },
        weather: [{
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d'
        }],
        clouds: { all: 88 },
        wind: {
            speed: 5.71,
            deg: 229.501
        },
        sys: { pod: 'd' },
        dt_txt: '2014 - 07 - 23 09: 00: 00'
    }]
};

/**
 * Create async observable error that errors
 * after a JS engine turn
 */
export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}

/**
 * Mock error response
 */
export const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404,
    statusText: 'Not Found'
});
