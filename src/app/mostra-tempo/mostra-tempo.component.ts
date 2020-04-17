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
  @Input() testando;
  // dataModel = Object.create(this.newModelCall);
  // city = this.dataModel.cit_name

  constructor(private service:ServiceApiService) { }
  ngOnInit(){
  }
  mostra(){

  }
}
