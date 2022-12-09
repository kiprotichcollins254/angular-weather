import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { BrowserModule } from '@angular/platform-browser';

const routes:Routes = [
  { path:"hello",component:HelloWorldComponent},
  { path:"showWeather", component:ShowWeatherComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path:'' ,redirectTo:"/dashboard" ,component:HomeComponent },
  { path:'home',component:HomeComponent}
]


@NgModule({
  declarations: [],
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
