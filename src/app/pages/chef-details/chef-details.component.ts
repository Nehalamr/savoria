import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService, Chef } from '../../services/restaurant.service';

@Component({
  selector: 'app-chef-details',
  standalone: false,
  templateUrl: './chef-details.component.html',
  styleUrl: './chef-details.component.css'
})
export class ChefDetailsComponent implements OnInit {

  chef: Chef | undefined;

  constructor(
    private route: ActivatedRoute,
    private restaurant: RestaurantService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.chef = this.restaurant.getChefById(id);
  }
}
