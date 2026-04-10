import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';
export class RegisterDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(3, 50)
  @IsNotEmpty()
  login!: string;

  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(8, 25)
  @IsNotEmpty()
  password!: string;
}
