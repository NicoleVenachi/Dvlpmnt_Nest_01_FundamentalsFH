
import {v4 as uuid } from "uuid";
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDTO } from "./dto/create-car.dto";

@Injectable()
export class CarsService {
  
  private cars = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    }
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);    

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car
  }

  create(CreateCarDTO:CreateCarDTO) {
    const car = {
      id: uuid(),
      ...CreateCarDTO,
    }

    this.cars.push(car);
    
    return car
  }
}
