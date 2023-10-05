import { Component } from '@angular/core';

//serviço
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent {

  constructor(private foodListService: FoodListService) { }

  public listAddItem(value: string) {

    let retorno = this.foodListService.foodListAdd(value)
    return retorno
  }


}
