import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherDays',
  templateUrl: './weatherDays.component.html',
  styleUrls: ['./weatherDays.component.Scss']
})
export class WeatherDaysComponent implements OnInit {

  @Input() days: any;

  constructor() { }

  ngOnInit() {
  }

}
