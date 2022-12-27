import { Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';
@Injectable()
export class CarService {
    private cars = CARS;
    public getCars() {
        return this.cars;
    }
    public postCar(car) {
        this.cars.push(car);
    }
    public getCarById(carId) {
        return this.cars.find(car => car.id === carId);
    }
    public deleteCarById(carId) {
        this.cars = this.cars.filter(car => car.id !== carId);
    }
    public updateCarById(carId, car) {
        this.cars = this.cars.map(car => car.id === carId ? car : car);
    }
}
