import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root' ,
  template: `
  {{valor}}
  <button type="button" (click)="adicionar()">Adicionar</button>
  <button type="button" (click)="zerar()">Zerar</button>
  <app-title ></app-title>
  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {
constructor(){};
public valor : number = 1
public adicionar (): number {

  return this.valor += 1;
}
public zerar (): number {

  return this.valor = 0
}
ngOnInit(): void {

}

}
