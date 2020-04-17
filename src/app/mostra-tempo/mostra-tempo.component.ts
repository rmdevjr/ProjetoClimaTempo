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
  @Input() newModelCall = {}
  dataModel;
  city

  constructor(private service:ServiceApiService) { }
  ngOnInit(): any {
    this.dataModel = Object.create(this.newModelCall)
    this.city = this.dataModel.city_name
    console.log(this.city)
  }
  mostra(){
    let teste = Object.create(this.newModelCall)

  }
}
