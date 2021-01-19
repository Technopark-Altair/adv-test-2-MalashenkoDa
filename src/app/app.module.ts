import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarComponent } from 'src/app/cars/cars.component'
import { Car } from 'src/Car.module';
import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
