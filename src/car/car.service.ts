import { Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';
@Injectable()
export class CarService {
    private cars = CARS;
    public getCars() {
        return this.cars;
    }
}
