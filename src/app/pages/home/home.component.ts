import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dishes = [
  { id: 1, name: 'Truffle Pasta',       price: 18, image: 'assets/Images/pasta.jpg',  popular: true },
  { id: 2, name: 'Grilled Steak',       price: 24, image: 'assets/Images/steak.jpg',  popular: true },
  { id: 3, name: 'Classic Burger',      price: 16, image: 'assets/Images/burger.jpg', popular: false },
  { id: 4, name: 'Chocolate Lava Cake', price: 10, image: 'assets/Images/cake.jpg',   popular: true }
];
features = [
  { icon: 'leaf',  title: 'Fresh Ingredients', text: 'Always natural & local' },
  { icon: 'chef',  title: 'Expert Chefs',      text: 'With years of experience' },
  { icon: 'heart', title: 'Cozy Atmosphere',   text: 'Perfect for every occasion' }
];

favorites: number[] = [];

 toggleFavorite(id: number) {
  if (this.favorites.includes(id)){
    this.favorites=this.favorites.filter(f=>f!== id)
 
  }
  else{
    this.favorites= [... this.favorites,id]
  }
 }
  isFavorite(id: number): boolean {
    return this.favorites.includes(id)
  }
 
}
