import { Component, OnInit , Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
constructor(){}
ngOnInit() {}
@Output() public enviarDados = new EventEmitter();
public list: Array< {nome:string, idade:number} > = [
{nome:"Lucas Bastos Delcico",idade:25},
{nome:"Idevan Carlos Pereira Delcico",idade:48},
{nome:"Elizabeth Sampaio Bastos Delcico",idade:46},
{nome:"Julia Bastos Delcico",idade:19}
];
public getDados(event: number){
this.enviarDados.emit(this.list[event]);
  console.log();

}


}
