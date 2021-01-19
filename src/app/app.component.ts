import { Component } from '@angular/core';
import { CarService } from "src/app/car.service";
import { Car } from 'src/Car.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KP';
  constructor(private carService: CarService) { }
  addNewCar(newCar: Car) {
    this.carService.addNewCar(newCar);
  }
}




