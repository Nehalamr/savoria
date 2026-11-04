import { Component, OnInit } from '@angular/core';
import { RestaurantService, Chef } from '../../services/restaurant.service';

@Component({
  selector: 'app-team',
  standalone: false,
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {

  chefs: Chef[] = [];

  constructor(private restaurant: RestaurantService) {}

  ngOnInit() {
    this.chefs = this.restaurant.getChefs();
  }

  get totalExperience(): number {
    return this.chefs.reduce((sum, c) => sum + c.experience, 0);
  }
}