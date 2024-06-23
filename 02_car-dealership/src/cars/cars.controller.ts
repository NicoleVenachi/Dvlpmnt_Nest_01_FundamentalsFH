import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  
  constructor(
    private readonly cars: CarsService
  ) {

  }

  @Get()
  getAllCars() {
    return this.cars.findAll();
  }

  @Get(':id')
  getCarById( @Param('id', ParseIntPipe) id: number) {
    return this.cars.findOneById(Number(id))
  }
}

