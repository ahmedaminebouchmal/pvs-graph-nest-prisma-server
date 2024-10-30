import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { BillsService } from './bills.service';
import { Bill } from './models/bill.model';
import { CreateBillInput } from './dto/create-bill.input';
import { UpdateBillInput } from './dto/update-bill.input';
import { Patient } from '../patients/models/patient.model';
import { Appointment } from '../appointments/models/appointment.model';

@Resolver(() => Bill)
export class BillsResolver {
  constructor(private readonly billsService: BillsService) {}

  @Mutation(() => Bill)
  createBill(@Args('createBillInput') createBillInput: CreateBillInput) {
    return this.billsService.create(createBillInput);
  }

  @Query(() => [Bill], { name: 'bills' })
  findAll() {
    return this.billsService.findAll();
  }

  @Query(() => Bill, { name: 'bill' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.billsService.findOne(id);
  }

  @Mutation(() => Bill)
  updateBill(@Args('updateBillInput') updateBillInput: UpdateBillInput) {
    return this.billsService.update(updateBillInput.id, updateBillInput);
  }

  @Mutation(() => Bill)
  removeBill(@Args('id', { type: () => ID }) id: number) {
    return this.billsService.remove(id);
  }

  @ResolveField(() => Patient)
  patient(@Parent() bill: Bill) {
    return bill.patient;
  }

  @ResolveField(() => Appointment)
  appointment(@Parent() bill: Bill) {
    return bill.appointment;
  }
}