import { Component, } from '@angular/core';

@Component({
  selector: 'app-root' ,
  template: `
  <!--
 <app-title></app-title>
  <app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais> -->
  <app-diretivas-atribultos></app-diretivas-atribultos>
  <router-outlet></router-outlet>`
})

export class AppComponent {

  constructor(){};

}
