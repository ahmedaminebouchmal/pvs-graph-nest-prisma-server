import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Patient {
  @Field(() => ID)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  dateOfBirth: Date;

  @Field()
  phone: string;

  @Field()
  address: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}