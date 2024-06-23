import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  
  private cars = [
    {
      id: 1,
      brande: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brande: 'Jeep',
      model: 'Cherokee',
    },
    {
      id: 3,
      brande: 'Honda',
      model: 'Civic',
    }
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find(car => car.id === id);    

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car
  }
}
