import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsOptional, IsInt, IsDateString } from 'class-validator';

@InputType()
export class CreateAppointmentInput {
  @Field()
  @IsDateString()  // Validate that the date is a valid date string
  @IsNotEmpty()
  date: string;    // Keep it as a string for easier handling

  @Field()
  @IsString()
  @IsNotEmpty()
  status: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  notes?: string;

  @Field(() => Int)  // Use Int since patientId is expected to be a number
  @IsNotEmpty()
  @IsInt()           // Validate that this is an integer
  patientId: number;

  @Field(() => Int)  // Use Int since staffId is expected to be a number
  @IsNotEmpty()
  @IsInt()           // Validate that this is an integer
  staffId: number;
}
