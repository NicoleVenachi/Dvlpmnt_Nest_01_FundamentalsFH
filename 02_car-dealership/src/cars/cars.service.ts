
import {v4 as uuid } from "uuid";
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDTO, UpdateCarDTO } from "./dto";

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

  update(id:string, UpdateCarDTO:UpdateCarDTO) {
    
    // validate if cars already exist (using exiting method to find by id)
    let carToUpdate = this.findOneById(id)

    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carToUpdate = {
          ...carToUpdate,
          ...UpdateCarDTO,
          id, // agrega el id recibido en los params (por si el del body era distinto)
        }
        
        return carToUpdate
      }

      return car; //sino hay match, regreso car normalito, sin hacerle nada
    })

    return carToUpdate; //updated car
  }
}
