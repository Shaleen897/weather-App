import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class Services {

    Api_Key:string = "ceba139414adf3dc213109914321147f";
    URI:string = '';
    days:any = '';

    constructor(private http : HttpClient) {
        this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.Api_Key}&units=metric&q=`;
      
    }


    getWeather(cityName : string, countryCode : string) {
        return this.http.get(`${this.URI }${cityName},${countryCode}`);
    }

    getLocation(){
        return this.http.get('https://ipapi.co/json/');
      }

}

