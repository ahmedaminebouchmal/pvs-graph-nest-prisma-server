import { InputType, Field, ID, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

@InputType()
export class UpdateBillInput {
  @Field(() => ID)
  @IsNotEmpty()
  id: number;

  @Field(() => Float, { nullable: true })
  @IsNumber()
  @IsOptional()
  amount?: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  status?: string;
}