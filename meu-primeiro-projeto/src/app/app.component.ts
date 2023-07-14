import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root' ,
  template: `
  <app-title></app-title>
  <app-data-binding></app-data-binding>
  <router-outlet></router-outlet>`
})

export class AppComponent {

  constructor(){};

}
