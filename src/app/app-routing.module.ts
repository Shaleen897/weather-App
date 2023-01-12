import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/Home.component';
import { WeatherDaysComponent } from './Components/weatherDays/weatherDays.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: WeatherDaysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
