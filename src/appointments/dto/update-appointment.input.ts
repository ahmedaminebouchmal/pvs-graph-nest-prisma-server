import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsInt, IsDateString } from 'class-validator';

@InputType()
export class UpdateAppointmentInput {
  @Field(() => Int)  // Use Int since id is expected to be a number
  @IsNotEmpty()
  @IsInt()          // Validate that this is an integer
  id: number;

  @Field({ nullable: true })
  @IsDateString()   // Validate that the date is a valid date string
  @IsOptional()
  date?: string;    // Change to string to handle date input easily

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  status?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  notes?: string;

  @Field(() => Int, { nullable: true })  // Use Int since patientId is expected to be a number
  @IsOptional()
  @IsInt()          // Validate that this is an integer
  patientId?: number;

  @Field(() => Int, { nullable: true })  // Use Int since staffId is expected to be a number
  @IsOptional()
  @IsInt()          // Validate that this is an integer
  staffId?: number;
}
