import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Please Enter Name' })
  @IsString({ message: 'Please Enter Valid Name' })
  name: string;

  @IsNotEmpty({ message: 'Please Enter Username' })
  @IsString({ message: 'Please Enter Valid Username' })
  userName: string;

  @Length(6, 14, {
    message: 'Phone number must be between 6 and 14 charcters',
  })
  phone: string;

  birthday: Date;
}
