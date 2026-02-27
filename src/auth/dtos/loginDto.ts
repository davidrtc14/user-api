import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDTO {
  @Transform(({ value }) => value?.trim())  
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Transform(({ value }) => value?.trim())
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
