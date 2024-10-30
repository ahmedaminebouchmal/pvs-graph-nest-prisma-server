import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateStaffInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  role: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  specialty?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  phone: string;
}