import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Staff } from './models/staff.model';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(createStaffInput: CreateStaffInput): Promise<Staff> {
    return this.prisma.staff.create({
      data: createStaffInput,
    });
  }

  async findAll(): Promise<Staff[]> {
    return this.prisma.staff.findMany();
  }

  async findOne(id: number): Promise<Staff> {
    return this.prisma.staff.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateStaffInput: UpdateStaffInput): Promise<Staff> {
    return this.prisma.staff.update({
      where: { id },
      data: updateStaffInput,
    });
  }

  async remove(id: number): Promise<Staff> {
    return this.prisma.staff.delete({
      where: { id },
    });
  }
}