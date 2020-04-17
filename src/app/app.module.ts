import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostraTempoComponent } from './mostra-tempo/mostra-tempo.component';
import { BuscarClimaComponent } from './buscar-clima/buscar-clima.component';
import { HttpClientModule } from "@angular/common/http";
import { ServiceApiService } from "./service-api.service";
@NgModule({
  declarations: [
    AppComponent,
    MostraTempoComponent,
    BuscarClimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [ServiceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
