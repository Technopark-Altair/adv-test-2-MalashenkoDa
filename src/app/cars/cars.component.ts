import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CarService } from '../car.service';
import { Car } from 'src/Car.module';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarComponent implements OnInit {
  public id : number;
   public car : Car;

   constructor(private carService:CarService,
    private route: ActivatedRoute ) { }
    cars: Car[] = this.carService.getCars();

    ngOnInit(): void {
      this.route.paramMap.pipe(
        switchMap(params => params.getAll('id'))
      )
        .subscribe(data => {
          this.id = +data;
          this.car = this.carService.findCar(this.id);
        });
    }

}
