import { Injectable } from '@angular/core';

export interface Chef {
  id: number;
  name: string;
  role: string;
  specialty: string;
  experience: number;
  bio: string;
  email: string;
  phone: string;
  city: string;
}

@Injectable({ providedIn: 'root' })
export class RestaurantService {

  private chefs: Chef[] = [
    {
      id: 1, name: 'Ahmed Hassan', role: 'Head Chef', specialty: 'Italian Cuisine',
      experience: 15,
      bio: 'Leads the Savoria kitchen with a passion for fresh pasta and authentic Italian flavors.',
      email: 'ahmed@savoria.com', phone: '+20 100 111 2222', city: 'Cairo'
    },
    {
      id: 2, name: 'Sara Mostafa', role: 'Pastry Chef', specialty: 'Desserts & Cakes',
      experience: 9,
      bio: 'Creates the desserts our guests never forget, from lava cakes to seasonal tarts.',
      email: 'sara@savoria.com', phone: '+20 100 333 4444', city: 'Alexandria'
    },
    {
      id: 3, name: 'Omar Khaled', role: 'Grill Master', specialty: 'Steaks & Grill',
      experience: 12,
      bio: 'Master of fire and flavor, he serves perfectly grilled steaks every single night.',
      email: 'omar@savoria.com', phone: '+20 100 555 6666', city: 'Giza'
    },
    {
      id: 4, name: 'Nour Adel', role: 'Sous Chef', specialty: 'Seafood',
      experience: 7,
      bio: 'Keeps the kitchen running smoothly and brings the sea to your plate.',
      email: 'nour@savoria.com', phone: '+20 100 777 8888', city: 'Cairo'
    }
  ];

  getChefs(): Chef[] {
    return this.chefs;
  }

  getChefById(id: number): Chef | undefined {
    return this.chefs.find(chef => chef.id === id);
  }
}