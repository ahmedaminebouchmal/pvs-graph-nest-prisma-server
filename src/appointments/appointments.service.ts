import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Appointment } from './models/appointment.model';
import { CreateAppointmentInput } from './dto/create-appointment.input';
import { UpdateAppointmentInput } from './dto/update-appointment.input';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  async create(createAppointmentInput: CreateAppointmentInput): Promise<Appointment> {
    return this.prisma.appointment.create({
      data: {
        date: new Date(createAppointmentInput.date), // Convert string to Date
        notes: createAppointmentInput.notes, // Can be null
        patientId: createAppointmentInput.patientId, // Should be a number
        staffId: createAppointmentInput.staffId, // Should be a number
        status: createAppointmentInput.status,
      },
      include: {
        patient: true,
        staff: true,
      },
    });
  }

  async findAll(): Promise<Appointment[]> {
    return this.prisma.appointment.findMany({
      include: {
        patient: true,
        staff: true,
      },
    });
  }

  async findOne(id: number): Promise<Appointment | null> { // Allow for null return
    return this.prisma.appointment.findUnique({
      where: { id },
      include: {
        patient: true,
        staff: true,
      },
    });
  }

  async update(id: number, updateAppointmentInput: UpdateAppointmentInput): Promise<Appointment> {
    return this.prisma.appointment.update({
      where: { id },
      data: {
        date: updateAppointmentInput.date ? new Date(updateAppointmentInput.date) : undefined, // Convert if provided
        notes: updateAppointmentInput.notes,
        patientId: updateAppointmentInput.patientId ?? undefined, // Keep as number or undefined
        staffId: updateAppointmentInput.staffId ?? undefined, // Keep as number or undefined
        status: updateAppointmentInput.status,
      },
      include: {
        patient: true,
        staff: true,
      },
    });
  }

  async remove(id: number): Promise<Appointment> {
    return this.prisma.appointment.delete({
      where: { id },
      include: {
        patient: true,
        staff: true,
      },
    });
  }
}
