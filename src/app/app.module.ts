import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { CityDetailsComponent } from './pages/city-details/city-details.component';
import { CityItemComponent } from './components/city-item/city-item.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CityDetailsComponent,
    CityItemComponent,
    CityListComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, {
      enableTracing: false,
      initialNavigation: 'enabled',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
