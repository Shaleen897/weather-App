import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class Services {

    Api_Key:string = "ceba139414adf3dc213109914321147f";
    URI:string = '';
   // url:any = '';
    days:any = '';

    constructor(private http : HttpClient) {
        this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.Api_Key}&units=metric&q=`;
       // this.url = `http://api.openweathermap.org/data/2.5/forecast?`;
    }


    getWeather(cityName : string, countryCode : string) {
        return this.http.get(`${this.URI }${cityName},${countryCode}`);
    }
/*
    oneCallApi(id:number) {
        fetch(`${this.url}id=${id}&appid=${this.Api_Key}`)
        .then(response => response.json())
        .then(response => {
            this.days = response;
           // console.log(this.days)
         })
        .catch(err => console.error(err));
    }*/
}

