import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
 <app-title></app-title>
  <app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais> 
  <app-new-component></app-new-component>
  <app-diretivas-atribultos></app-diretivas-atribultos>
  <router-outlet></router-outlet>
 
  <app-input [contador] = "addValue"></app-input>
<br>

  <button (click)="add()">Add</button>
  
  <ng-template [ngIf] = "getDados">
  <h1> {{getDados.nome}}</h1>
  <h2> {{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)= "setDados($event)"></app-output>-->
  
  <app-food-list></app-food-list>
  <app-food-add></app-food-add>
  `
})

export class AppComponent {

  constructor() { };
  public getDados: { nome: string, idade: number } | undefined;

  public addValue: number = 0
  public add() {

    return this.addValue++
  }
  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event
  }
}
