import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelResponse } from './buscar-clima/model.response';

import { MODEL_RETURN } from './gateway';

const apiKey = "9fb9b8560938403ab0f9983441b84b9e";
var apiUrl =`https://api.weatherbit.io/v2.0/current?city=`;
var finalUrl = "&lang=pt&BR&key=";
const historical = "https://api.weatherbit.io/v2.0/forecast/daily?city="

@Injectable({
  providedIn: 'root'
})


export class ServiceApiService {


  constructor(private http:HttpClient) { }


  modelCall
  cityHistorical

  getWeatherItems(){
    return MODEL_RETURN;
  }

  getData(city:string): Observable<ModelResponse[]>{
    this.cityHistorical = city
    this.modelCall = this.http.get<ModelResponse[]>(apiUrl + city + finalUrl + apiKey);
    return this.http.get<ModelResponse[]>(apiUrl + city + finalUrl + apiKey);
 }

 dailyForecast(){
   console.log("funciona")
    return this.http.get(historical + this.cityHistorical + finalUrl + apiKey + "&days=5")
 }

}
