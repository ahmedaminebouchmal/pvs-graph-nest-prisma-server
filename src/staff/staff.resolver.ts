import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { StaffService } from './staff.service';
import { Staff } from './models/staff.model';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';

@Resolver(() => Staff)
export class StaffResolver {
  constructor(private readonly staffService: StaffService) {}

  @Mutation(() => Staff)
  createStaff(@Args('createStaffInput') createStaffInput: CreateStaffInput) {
    return this.staffService.create(createStaffInput);
  }

  @Query(() => [Staff], { name: 'allStaff' })
  findAll() {
    return this.staffService.findAll();
  }

  @Query(() => Staff, { name: 'staff' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.staffService.findOne(id);
  }

  @Mutation(() => Staff)
  updateStaff(@Args('updateStaffInput') updateStaffInput: UpdateStaffInput) {
    return this.staffService.update(updateStaffInput.id, updateStaffInput);
  }

  @Mutation(() => Staff)
  removeStaff(@Args('id', { type: () => ID }) id: number) {
    return this.staffService.remove(id);
  }
}