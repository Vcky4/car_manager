import { Injectable, HttpException } from '@nestjs/common';
import { CARS } from './cars.mock';
import { Car } from './car.dto';
@Injectable()
export class CarService {
    private cars = CARS;
    public getCars() {
        return this.cars;
    }
    public postCar(car: Car) {
        const check = this.cars.find((it) => it.id === car.id);
        if (check) {
            throw new HttpException('Car already exists', 400);
        }
        this.cars.push(car);
        return this.cars;
    }
    public getCarById(id: number): Promise<Car> {
        const carId = Number(id);
        return new Promise((resolve) => {
            const car = this.cars.find((car) => car.id === carId);
            if (!car) {
                throw new HttpException('Car not found', 404);
            }
            return resolve(car);
        });
        // return this.cars.find((car) => car.id === carId);
    }
    public deleteCarById(id: number): Promise<any> {
        const carId = Number(id);
        return new Promise((resolve) => {
            const car = this.getCarById(carId);
            if (car) {
                this.cars = this.cars.filter((car) => car.id !== carId);
                return resolve(this.cars);
            }
            throw new HttpException('Car not found', 404);
        });
    }
    public updateCarById(id: number, propertyName: string, propertyValue: string): Promise<Car> {
        const carId = Number(id);
        return new Promise((resolve) => {
            const carIndex = this.cars.findIndex((car) => car.id === carId);
            if (carIndex > -1) {
                this.cars[carIndex][propertyName] = propertyValue;
                return resolve(this.getCarById(carId));
            }
            throw new HttpException('Car not found', 404);
        });
        // this.cars = this.cars.map((car) => car.id === carId ? car : car);
    }
}
