import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';

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
  getCarById( @Param('id', ParseUUIDPipe) id: string) {
    return this.cars.findOneById(id)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCar(@Body() createCar:CreateCarDTO) {
    return createCar
  }

  @Patch('/:id')
  updateCar(@Body() CreateCarDTO:CreateCarDTO, @Param('id') id:string) {
    return {CreateCarDTO, id}
  }
  @Delete('/:id')
  deleteCar(@Param('id') id:string) {
    return {
      method: 'DELETE',
      id
    }
  }
}



