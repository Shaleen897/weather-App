import { Component, OnInit, Output } from '@angular/core';
import { Services } from 'src/app/Services/Services';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() days:any;;

  time: number = Date.now();

  
 location:any = {cityName:"Santo Domingo", countryCode:"Dom"};
 weather:any;
 // days:any = "";
 
 url:any = '';

 Api_Key:string = "ceba139414adf3dc213109914321147f";

  constructor(private Servicio:Services) {
  
    this.url = `http://api.openweathermap.org/data/2.5/forecast?`;

   }

  ngOnInit() {
   this.getWeather(this.location.cityName, this.location.countryName);
  
  }

  getWeather(cityName: string, countryCode: string){
    this.Servicio.getWeather(cityName, countryCode)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res;
        this.OneCallApi(this.weather?.id);
      
      },error => {
        console.log(error);
      }
    )

    
  }



  onSubmit(cityName: HTMLInputElement, countryCode: HTMLInputElement){
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }
  
  
OneCallApi(id:number){
 // this.Servicio.oneCallApi(id);

 fetch(`${this.url}id=${id}&appid=${this.Api_Key}`)
 .then(response => response.json())
 .then(response => {
     this.days = response;
     console.log(this.days)
  })
 .catch(err => console.error(err));
  
}



}
