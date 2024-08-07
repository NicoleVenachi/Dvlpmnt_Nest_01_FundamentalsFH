import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

import {v4 as uuid} from 'uuid'

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    }
  ]
  create(createBrandDto: CreateBrandDto) {

    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    }

    this.brands.push(brand)
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand wit id ${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);

    this.brands = this.brands.map(brand => {
      if (brand.id === id){
        brandDb.updatedAt = new Date().getTime(); // create new dat
        brandDb = {...brandDb, ...updateBrandDto} // a la brand dB encontrada, le cambio la fech ay le agrego los datos actualizados (name)

        return brandDb; 
      }
      
      return brand; // la regfresa sin changes
    })
    return `This action updates a #${id} brand`;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id)

    return `This action removes a #${id} brand`;
  }
}
