import { InputType, Field, ID, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateBillInput {
  @Field(() => Float)
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  status: string;

  @Field(() => ID)
  @IsNotEmpty()
  patientId: number;

  @Field(() => ID)
  @IsNotEmpty()
  appointmentId: number;
}