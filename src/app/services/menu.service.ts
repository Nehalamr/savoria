import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Dish {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {
 
  private url = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http :HttpClient) { }
  searchDishes(text: string): Observable<Dish[]>{
      return this.http
      .get<{ meals: Dish[] | null }>(`${this.url}/search.php?s=${text}`)
         .pipe(map(res => res.meals ?? []));
  }
  getByCategory(cat: string): Observable<Dish[]> {
  return this.http
    .get<{ meals: Dish[] | null }>(`${this.url}/filter.php?c=${cat}`)
    .pipe(map(res => res.meals ?? []));
}
}
