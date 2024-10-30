import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Staff {
  @Field(() => ID)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  role: string;

  @Field({ nullable: true })
  specialty?: string;

  @Field()
  phone: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}