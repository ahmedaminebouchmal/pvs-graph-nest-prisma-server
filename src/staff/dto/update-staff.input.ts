import { InputType, Field, ID } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

@InputType()
export class UpdateStaffInput {
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
  @IsString()
  @IsOptional()
  role?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  specialty?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  phone?: string;
}