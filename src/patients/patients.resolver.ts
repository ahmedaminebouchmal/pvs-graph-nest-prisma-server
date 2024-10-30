import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PatientsService } from './patients.service';
import { Patient } from './models/patient.model';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';

@Resolver(() => Patient)
export class PatientsResolver {
  constructor(private readonly patientsService: PatientsService) {}

  @Mutation(() => Patient)
  async createPatient(@Args('createPatientInput') createPatientInput: CreatePatientInput) {
    return this.patientsService.create(createPatientInput);
  }

  @Query(() => [Patient], { name: 'patients' })
  async findAll() {
    return this.patientsService.findAll();
  }

  @Query(() => Patient, { name: 'patient' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.patientsService.findOne(Number(id)); // Convert to number
  }

  @Mutation(() => Patient)
  async updatePatient(@Args('updatePatientInput') updatePatientInput: UpdatePatientInput) {
    return this.patientsService.update(updatePatientInput.id, updatePatientInput);
  }

  @Mutation(() => Patient)
  async removePatient(@Args('id', { type: () => ID }) id: string) {
    return this.patientsService.remove(Number(id)); // Ensure ID is converted to a number
  }
}
