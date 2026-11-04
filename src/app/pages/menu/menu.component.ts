import { Component, OnInit } from '@angular/core';
import { MenuService, Dish } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {


  categories = ['Pasta', 'Seafood', 'Dessert', 'Beef', 'Chicken', 'Vegetarian'];

  selectedCategory = 'Pasta';
  searchText = '';
  dishes: Dish[] = [];
  loading = true;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.selectCategory('Pasta');
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.searchText = '';
    this.loading = true;
    this.menuService.getByCategory(cat).subscribe(data => {
      this.dishes = data;
      this.loading = false;
    });
  }

  search() {
    if (!this.searchText.trim()) {
      return;
    }
    this.selectedCategory = '';
    this.loading = true;
    this.menuService.searchDishes(this.searchText).subscribe(data => {
      this.dishes = data;
      this.loading = false;
    });
  }
}