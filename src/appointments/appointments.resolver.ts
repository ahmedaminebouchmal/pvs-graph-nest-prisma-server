import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './models/appointment.model';
import { CreateAppointmentInput } from './dto/create-appointment.input';
import { UpdateAppointmentInput } from './dto/update-appointment.input';
import { Patient } from '../patients/models/patient.model';
import { Staff } from '../staff/models/staff.model';

@Resolver(() => Appointment)
export class AppointmentsResolver {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Mutation(() => Appointment)
  createAppointment(@Args('createAppointmentInput') createAppointmentInput: CreateAppointmentInput) {
    return this.appointmentsService.create(createAppointmentInput);
  }

  @Query(() => [Appointment], { name: 'appointments' })
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Query(() => Appointment, { name: 'appointment' })
  findOne(@Args('id', { type: () => ID }) id: number) { // Change id type to number
    return this.appointmentsService.findOne(id);
  }

  @Mutation(() => Appointment)
  updateAppointment(@Args('updateAppointmentInput') updateAppointmentInput: UpdateAppointmentInput) {
    return this.appointmentsService.update(updateAppointmentInput.id, updateAppointmentInput);
  }

  @Mutation(() => Appointment)
  removeAppointment(@Args('id', { type: () => ID }) id: number) { // Change id type to number
    return this.appointmentsService.remove(id);
  }

  @ResolveField(() => Patient)
  patient(@Parent() appointment: Appointment) {
    return appointment.patient;
  }

  @ResolveField(() => Staff)
  staff(@Parent() appointment: Appointment) {
    return appointment.staff;
  }
}
