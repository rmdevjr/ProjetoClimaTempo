import { Component, OnInit, Input } from '@angular/core';

import { ServiceApiService } from '../service-api.service';
import { ModelResponse } from '../buscar-clima/model.response';

@Component({
  selector: 'app-mostra-tempo',
  templateUrl: './mostra-tempo.component.html',
  styleUrls: ['./mostra-tempo.component.css']
})
export class MostraTempoComponent implements OnInit {

  model:ModelResponse[]

  constructor(private service:ServiceApiService) { }
  @Input() responses: any;
  @Input() futureResponses: any;

  ngOnInit(){
    // this.model = this.service.getWeatherItems()
  }
  mostra(){

  }
}
