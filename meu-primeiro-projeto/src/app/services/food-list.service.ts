import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, } from '@angular/core';
import { Observable, } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvents = new EventEmitter();

  private list: Array<string> = [
    "Bacon ",
    "Feijão",
    "Ovo"
  ];
  private url: string = "http://localhost:3000/" //list-food

  constructor(private http: HttpClient) { }

 public foodList(): Observable<FoodList> {
  
return  this.http.get<FoodList>(`${this.url}list-food`).pipe(
    res => res,
    error => error
  )

 }

  public foodListAdd(value: string) {
    this.foodListAlert(value);
    this.list.push(value);
  }
  public foodListAlert(value: string) {

    let retorno = this.emitEvents.emit(value)
    return retorno;
  }
}
