import { Controller, Get, Put, Delete, Post, Body } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Get()
    getCars() {
        return this.carService.getCars();
    }

    @Get(':id')
    getCarById() {
        return this.carService.getCarById(1);
    }

    @Delete(':id')
    deleteCarById() {
        return this.carService.deleteCarById(1);
    }

    @Post()
    postCar(@Body) {
        return this.carService.postCar({
            id: 1,
            brand: 'BMW',
            model: 'M3',
            year: 2018,
            price: 50000
        });
    }

    @Put(':id')
    updateCarById() {
        return this.carService.updateCarById(1, 'brand', 'Mercedes');
    }
}
