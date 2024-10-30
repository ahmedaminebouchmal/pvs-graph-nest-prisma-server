import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Patient } from '../../patients/models/patient.model';
import { Appointment } from '../../appointments/models/appointment.model';

@ObjectType()
export class Bill {
  @Field(() => ID)
  id: number;

  @Field(() => Float)
  amount: number;

  @Field()
  status: string;

  @Field(() => ID)
  patientId: number;

  @Field(() => Patient)
  patient: Patient;

  @Field(() => ID)
  appointmentId: number;

  @Field(() => Appointment)
  appointment: Appointment;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}