import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateUserDTO {
  @Transform(({ value }) => value?.trim())
  @IsOptional()
  @IsEmail()
  email?: string;

  @Transform(({ value }) => value?.trim())
  @IsOptional()
  @IsString()
  @MinLength(2)
  name?: string;

  @Transform(({ value }) => value?.trim())
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;
}