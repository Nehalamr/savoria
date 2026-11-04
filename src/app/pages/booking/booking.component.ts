import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  guestName = '';
  guests = 2;
  date = '';
  time = '';
  seatsLeft = 12;
  isTableOpen = true;
  booked = false;

  toggleOpen() {
    this.isTableOpen = !this.isTableOpen;
  }

  confirm(phone: string) {
    this.booked = true;
    this.seatsLeft = this.seatsLeft - this.guests;
    console.log('Phone:', phone);
  }

  reset() {
    this.booked = false;
    this.guestName = '';
    this.guests = 2;
    this.date = '';
    this.time = '';
  


 
}
 }
