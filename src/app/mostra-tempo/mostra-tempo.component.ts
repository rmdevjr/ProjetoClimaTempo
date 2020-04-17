import { Component, OnInit } from '@angular/core';

import { ServiceApiService } from '../service-api.service';
import { ModelResponse } from '../buscar-clima/model.response';

@Component({
  selector: 'app-mostra-tempo',
  templateUrl: './mostra-tempo.component.html',
  styleUrls: ['./mostra-tempo.component.css']
})
export class MostraTempoComponent implements OnInit {

 

  constructor(private service:ServiceApiService) { }

  ngOnInit(): any {
    
  }

}
