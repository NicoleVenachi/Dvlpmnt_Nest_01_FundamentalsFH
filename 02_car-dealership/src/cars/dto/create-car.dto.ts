import { IsString, MinLength } from "class-validator";

export class CreateCarDTO{

  @IsString({message: 'The brand must be a string!!!'})
  readonly brand: string;

  @IsString()
  @MinLength(3) //tenga al menos un valor de 3 carateres
  readonly model: string;
}

