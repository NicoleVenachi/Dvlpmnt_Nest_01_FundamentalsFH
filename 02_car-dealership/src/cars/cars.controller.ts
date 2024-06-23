import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO, UpdateCarDTO } from './dto';


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
  createCar(@Body() CreateCarDTO:CreateCarDTO) {
    return this.cars.create(CreateCarDTO)
  }

  @Patch('/:id')
  updateCar(
    @Param('id', ParseUUIDPipe) id:string,
    @Body() UpdateCarDTO:UpdateCarDTO
  ) {
    return this.cars.update(id, UpdateCarDTO)
  }

  
  @Delete('/:id')
  deleteCar(@Param('id') id:string) {
    return {
      method: 'DELETE',
      id
    }
  }
}



