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

  public model:ModelResponse;
  estado="bahia";
  retorno:any;
  value:any;
  city:any; 

  constructor(private myservice: ServiceApiService) { }

  ngOnInit() {
    this.myservice.getData(this.estado).subscribe((data) => {
      this.model =  Object.create(data).data[0];
      this.retorno = this.model
      console.log(this.model)
      
    })
 };

  // buscaValor(event) {
  //   this.estado = event.target.value
  // }


   mostraValor() {
    
     this.city = this.retorno;
     console.log(this.retorno);
     console.log(this.city);  
  }

}
