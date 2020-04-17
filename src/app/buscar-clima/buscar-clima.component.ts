import { Component, OnInit, Input } from '@angular/core';
import { ServiceApiService } from "../service-api.service";
import { ModelResponse } from './model.response';


@Component({
  selector: 'app-buscar-clima',
  templateUrl: './buscar-clima.component.html',
  styleUrls: ['./buscar-clima.component.css'],
  template: `city : {{city}}`
})
export class BuscarClimaComponent implements OnInit {

  public model:ModelResponse[];
  estado="bahia";
  retorno:any;
  city:any; 
  modelResult

  constructor(private myservice: ServiceApiService) { }

  ngOnInit() {
 };


 value(event){
   this.estado = event.target.value
 }

  buscaValor() {
    this.myservice.getData(this.estado).subscribe((data) => {
      let resultData = Object.create(data).data[0];
      this.modelResult = new ModelResponse(resultData.city_name,resultData.temp,resultData.country_code,resultData.state_code)
      this.city = this.modelResult.city_name 
      return this.modelResult
    })
  }


   mostraValor() {
    
     this.city = this.retorno;
     console.log(this.retorno);
     console.log(this.city);  
  }

}
