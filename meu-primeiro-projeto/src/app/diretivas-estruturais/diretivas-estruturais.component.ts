import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {  
  public condition : boolean = true;
  public msgPastel: string = "Preparando seu pastel";
  public list: Array <{nome: string , idade:number }> = [
    {nome:"Lucas Delcico" , idade:25},
    { nome: "Idevan Delcico",idade:48 },
    {nome:"Julia Delcico",idade:19},
    {nome:"Elisabeth Delcico",idade:49}
  
  ]
  public nome: string  = "Luiza"
  constructor(){

  }

  ngOnInit(): void {
      setInterval(()=>{
        if(this.condition){
          this.msgPastel = "Preparando seu pastel!!"
          this.condition  = false;
    }
      else{
           this.msgPastel = "Seu pastel está pronto!!"
           this.condition  = true;
        }
    },  2000)
  }

public onClickAddList() {
 
  this.list.push({nome:"Luiza ",idade:23})

}
public OnclickEventList(event:MouseEvent){
console.log(event)

}

}
