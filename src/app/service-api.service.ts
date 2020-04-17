import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelResponse } from './buscar-clima/model.response';

import { MODEL_RETURN } from './gateway';

const apiKey = "9fb9b8560938403ab0f9983441b84b9e";
var apiUrl =`https://api.weatherbit.io/v2.0/current?city=`;
var finalUrl = ",BR&key=";


@Injectable({
  providedIn: 'root'
})


export class ServiceApiService {


  constructor(private http:HttpClient) { }


  modelCall

  getData(city:string): Observable<ModelResponse[]>{
    this.modelCall = this.http.get<ModelResponse[]>(apiUrl + city + finalUrl + apiKey);
    return this.http.get<ModelResponse[]>(apiUrl + city + finalUrl + apiKey);
 }

}
