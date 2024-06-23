import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDTO{

  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id: string; //por si quisieran hacerle update al id, aunque luego no dejare

  @IsString({message: 'The brand must be a string!!!'})
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  @MinLength(3) //tenga al menos un valor de 3 carateres
  readonly model?: string;
}

