import { Component  } from '@angular/core';

type NewType = MouseEvent;

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

public nome : string  = "Lucas Bastos Delcico";

public idade : number = 25;

public resultado = this.verifica().valueOf()

public verifica () {
  var idade = this.idade;
  if(idade >25 ){
  return  "Sim"
}else{
  return "Não"
}}
 
public desativarBotao : boolean = true;
public imgSrc : string ="https://seeklogo.com/images/C/Corinthians_Bras_and__227_o-logo-E92E44B595-seeklogo.com.png";
public meuTimao : string =  "Maior clube do Brasil"
constructor(){}
ngOnInit() {}

public salveCoringao( ){
   alert("Vai corinthians !")

}
 public mouseMoveTest(valor : MouseEvent ){
  
  if(this.position.x == this.position.y  && this.position.y == this.position.x ){
  
    this.consegui = "VAI CORINTHIANS"
  }

  this.position.x = valor.offsetX
  this.position.y = valor.offsetY
 }

public consegui : string = ""
 public position: {x:number , y:number} = {x:0 , y:0}

}
