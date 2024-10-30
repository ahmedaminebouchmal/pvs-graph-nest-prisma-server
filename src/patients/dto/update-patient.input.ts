import { InputType, Field, ID } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';

@InputType()
export class UpdatePatientInput {
  @Field(() => ID)
  @IsNotEmpty()
  id: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  firstName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  lastName?: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  phone?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  address?: string;
}