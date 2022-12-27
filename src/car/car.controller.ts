import { Controller, Get, Put, Delete, Post, Body, Param } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './car.dto';

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) { }

    @Get()
    getCars() {
        return this.carService.getCars();
    }

    @Get(':id')
    getCarById(@Param('id') id: number) {
        return this.carService.getCarById(id);
    }

    @Delete(':id')
    deleteCarById() {
        return this.carService.deleteCarById(1);
    }

    @Post()
    postCar(@Body() car: Car) {
        return this.carService.postCar(car);
    }

    @Put(':id')
    updateCarById() {
        return this.carService.updateCarById(1, 'brand', 'Mercedes');
    }
}
