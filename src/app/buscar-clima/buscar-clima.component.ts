import { Component, OnInit, Input } from '@angular/core';
import { ServiceApiService } from "../service-api.service";
import { ModelResponse } from './model.response';
import { ModelFutureResponse } from '../modelFuture.response';

@Component({
  selector: 'app-buscar-clima',
  templateUrl: './buscar-clima.component.html',
  styleUrls: ['./buscar-clima.component.css'],
})

export class BuscarClimaComponent implements OnInit {

  model: ModelResponse[];
  futureModel: ModelFutureResponse[];
  estado = "Brasilia";
  city: any;
  response: any
  apiDataReturn:any
  futureReturn:any
  futureResponse:any;

  constructor(private myservice: ServiceApiService) { }

  ngOnInit() {
    this.myservice.getData(this.estado).subscribe((data) => {
      this.apiDataReturn = data
      let resultData = this.apiDataReturn.data[0]
      this.response = new ModelResponse(
        resultData.city_name,
        resultData.temp,
        resultData.app_temp,
        resultData.rh,
        resultData.pres,
        resultData.wind_spd,
        resultData.country_code,
        resultData.state_code,
        resultData.weather.icon,
        resultData.weather.description
      )
      console.log(this.response)
      return this.response
    })
  };


  value(event) {
    this.estado = event.target.value
  }

  buscaValor() {
    this.myservice.getData(this.estado).subscribe((data) => {
      this.apiDataReturn = data
      let resultData = this.apiDataReturn.data[0]
      this.response = new ModelResponse(
        resultData.city_name,
        resultData.temp,
        resultData.app_temp,
        resultData.rh,
        resultData.pres,
        resultData.wind_spd,
        resultData.country_code,
        resultData.state_code,
        resultData.weather.icon,
        resultData.weather.description
      )
      console.log(this.response)
      return this.response
    })
    this.myservice.dailyForecast().subscribe((data)=>{
      this.futureReturn = data
      let futureData = this.futureReturn.data[0]
      this.futureResponse = new ModelFutureResponse(
        futureData.temp,
        futureData.app_temp,
        futureData.rh,
        futureData.weather.icon,
        futureData.weather.description
      )
      return this.futureResponse
    })
  }

}
