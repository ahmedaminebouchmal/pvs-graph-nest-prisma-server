import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Patient } from '../../patients/models/patient.model';
import { Staff } from '../../staff/models/staff.model';

@ObjectType()
export class Appointment {
  @Field(() => ID)
  id: number;

  @Field()
  date: Date;

  @Field()
  status: string;

  @Field({ nullable: true })
  notes?: string;

  @Field(() => ID)
  patientId: number;

  @Field(() => Patient)
  patient: Patient;

  @Field(() => ID)
  staffId: number;

  @Field(() => Staff)
  staff: Staff;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}