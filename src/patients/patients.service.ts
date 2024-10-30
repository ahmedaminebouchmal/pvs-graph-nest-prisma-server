import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Patient } from './models/patient.model';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  async create(createPatientInput: CreatePatientInput): Promise<Patient> {
    return this.prisma.patient.create({
      data: createPatientInput,
    });
  }

  async findAll(): Promise<Patient[]> {
    return this.prisma.patient.findMany();
  }

  async findOne(id: number): Promise<Patient | null> {
    const patient = await this.prisma.patient.findUnique({
      where: { id },
    });
    
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    
    return patient;
  }

  async update(id: number, updatePatientInput: UpdatePatientInput): Promise<Patient> {
    const patientExists = await this.findOne(id); // Ensure patient exists
    return this.prisma.patient.update({
      where: { id },
      data: updatePatientInput,
    });
  }

  async remove(id: number): Promise<Patient> {
    const patientExists = await this.findOne(id); // Ensure patient exists
    return this.prisma.patient.delete({
      where: { id },
    });
  }
}
