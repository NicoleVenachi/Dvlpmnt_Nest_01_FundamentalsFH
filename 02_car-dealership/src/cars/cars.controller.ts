import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
  getCarById( @Param('id') id: string) {
    return this.cars.findOneById(id)
  }

  @Post()
  createCar(@Body() body:any) {
    return body
  }

  @Patch('/:id')
  updateCar(@Body() body:any, @Param('id') id:string) {
    return {body, id}
  }
  @Delete('/:id')
  deleteCar(@Param('id') id:string) {
    return {
      method: 'DELETE',
      id
    }
  }
}



