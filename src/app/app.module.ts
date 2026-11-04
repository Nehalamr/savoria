import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TeamComponent } from './pages/team/team.component';
import { ChefDetailsComponent } from './pages/chef-details/chef-details.component';
import { BookingComponent } from './pages/booking/booking.component';
import { DynamicBackgroundDirective } from './directives/dynamic-background.directive';
import { RevealDirective } from './directives/reveal.directive';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    TeamComponent,
    ChefDetailsComponent,
    BookingComponent,
    DynamicBackgroundDirective,
    RevealDirective
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }