import { Component  ,OnInit} from '@angular/core';
import { __param } from 'tslib';

@Component({
  selector: 'app-diretivas-atribultos',
  templateUrl: './diretivas-atribultos.component.html',
  styleUrls: ['./diretivas-atribultos.component.css']
})
export class DiretivasAtribultosComponent  implements OnInit {

  public valor :boolean = true
  public heightpx: string = "20px"
  public backgroundColor: string = "pink"
  public nome: string = "";
  public list : Array<{nome:string}>= [];
  public salvar (){
    this.list.push({nome:this.nome});
    this.nome = "";
  }
  public excluir (){
    if(this.list.length == 0){
     alert("Lista de nomes vazias") 
    }else{
      this.list.splice(0);
    }

  }
ngOnInit(): void {

  setInterval(() => {

    if(this.valor == true){
      this.valor = false
    }else{
      this.valor = true
    }

    if(this.heightpx== "20px"){
      this.heightpx = "50px";
      this.backgroundColor = "darkBlue"
    } else{

      this.heightpx = "20px";
      this.backgroundColor = "pink"
    }
  },2000);
}
}
