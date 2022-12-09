import { Component } from '@angular/core';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent {
    WeatherData:any
    ngOnInit():void{
      this.getWeatherData()
    }
    getWeatherData(){
      fetch("https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=ff1bc4683fc7325e9c57e586c20cc03e")
      .then(response=>response.json())
      .then(data=>(this.setWeatherData(data)))
    }
    setWeatherData(data:any){
      this.WeatherData = data
      let sunsetTime = new Date(this.WeatherData.sys.sunset*1000)
      let currentDate = new Date()
      this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime())

      this.WeatherData.temp_celsius = (this.WeatherData.main.temp- 273.15).toFixed(0)
      this.WeatherData.temp_celsius_min = (this.WeatherData.main.temp_min- 273.15).toFixed(0)
      this.WeatherData.temp_celsius_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0)

    }
}
