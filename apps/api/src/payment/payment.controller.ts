import { Controller, Get, Post, Body,  Param } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { AuthPayload } from '@/auth/auth.decorator';
import type { AuthServiceTypes } from '@zeroquest/types';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async create(
    @Body() createPaymentDto: CreatePaymentDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.paymentService.create(createPaymentDto, payload);
  }

  @Get()
  async findAll(@AuthPayload() payload: AuthServiceTypes.JwtPayload) {
    return this.paymentService.findAll(payload);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.paymentService.findOne(+id, payload);
  }
}
