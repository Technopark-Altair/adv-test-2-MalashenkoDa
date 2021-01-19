import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/Car.module';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  newcar: Car = new Car();
  @Output() addedNewCar = new EventEmitter<Car>();
  constructor() { }  
  ngOnInit(): void {
  
  }

  addNewCar(){
    this.addedNewCar.emit(this.newcar);
  }

}
