import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Bill } from './models/bill.model';
import { CreateBillInput } from './dto/create-bill.input';
import { UpdateBillInput } from './dto/update-bill.input';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  // Create a new bill with nested patient and appointment relations
  async create(createBillInput: CreateBillInput): Promise<Bill> {
    return this.prisma.bill.create({
      data: createBillInput,
      include: {
        patient: true,
        appointment: {
          include: {
            patient: true,
            staff: true,
          },
        },
      },
    });
  }

  // Find all bills with nested patient and appointment relations
  async findAll(): Promise<Bill[]> {
    return this.prisma.bill.findMany({
      include: {
        patient: true,
        appointment: {
          include: {
            patient: true,
            staff: true,
          },
        },
      },
    });
  }

  // Find one bill by ID with nested patient and appointment relations
  async findOne(id: number): Promise<Bill> {
    return this.prisma.bill.findUnique({
      where: { id },
      include: {
        patient: true,
        appointment: {
          include: {
            patient: true,
            staff: true,
          },
        },
      },
    });
  }

  // Update an existing bill by ID with nested patient and appointment relations
  async update(id: number, updateBillInput: UpdateBillInput): Promise<Bill> {
    return this.prisma.bill.update({
      where: { id },
      data: updateBillInput,
      include: {
        patient: true,
        appointment: {
          include: {
            patient: true,
            staff: true,
          },
        },
      },
    });
  }

  // Delete a bill by ID with nested patient and appointment relations
  async remove(id: number): Promise<Bill> {
    return this.prisma.bill.delete({
      where: { id },
      include: {
        patient: true,
        appointment: {
          include: {
            patient: true,
            staff: true,
          },
        },
      },
    });
  }
}
