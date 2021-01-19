import { Injectable } from '@angular/core';
import { Car } from 'src/Car.module';

@Injectable({
    providedIn: 'root'
  })
export class CarService {
    car:Array<Car>=[
        {id:1,brandName:"Mercedes-Benz", modelName:"GLA",priceInRub:120000},
        { id:2,brandName:"Audi", modelName:"A6",priceInRub:150000},
        {id:3,brandName:"Porsche", modelName:"911",priceInRub:112000}
    ];

    
 
    constructor() { }
    getCars(){
      return this.car;
    }
  
    findCar(id:number) {
      return this.car.find(car => car.id === id);
  }
  addNewCar(car: Car) {
    car.id = this.car.length;
    this.car.push(car);
  }
  }

 
