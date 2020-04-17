import { Component, OnInit } from '@angular/core';
import {ServiceApiService} from './service-api.service'
import { ModelResponse } from './buscar-clima/model.response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather Project';

  estado:string = "Salvador"
  model:ModelResponse[];
  modelCall
  teste:string = "Teste";
  constructor(private myservice: ServiceApiService){}

  ngOnInit() {
    this.myservice.getData(this.estado).subscribe((data) => {
      let resultData = Object.create(data).data[0];
      this.modelCall = new ModelResponse(resultData.city_name,resultData.temp,resultData.country_code,resultData.state_code)
      return this.modelCall
    })
 };
}
