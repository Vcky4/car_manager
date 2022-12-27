import { Controller, Get, Put, Delete, Post, Body, Param, Query } from '@nestjs/common';
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
    deleteCarById(@Param('id') id: number) {
        return this.carService.deleteCarById(id);
    }

    @Post()
    postCar(@Body() car: Car) {
        return this.carService.postCar(car);
    }

    @Put(':id')
    updateCarById(@Param('id') id: number, @Query() query) {
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.carService.updateCarById(id, propertyName, propertyValue);
    }
}
