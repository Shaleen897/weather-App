import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/Home.component';

import { HttpClientModule } from '@angular/common/http'
import { WeatherDaysComponent } from './Components/weatherDays/weatherDays.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
