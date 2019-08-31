import { Routes } from '@angular/router';

import { CityDetailsComponent } from './pages/city-details/city-details.component';
import { HomeComponent } from './pages/home/home.component';

export const APP_ROUTES: Routes = [
    {
        path: 'city-details',
        component: CityDetailsComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

