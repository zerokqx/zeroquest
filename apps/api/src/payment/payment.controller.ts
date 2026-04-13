import type { Request } from 'express';
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Sse,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { AuthPayload } from '@/auth/auth.decorator';
import type { AuthServiceTypes } from '@zeroquest/types';
import { PaymentEventService } from './payment-event.service';
import { interval, map, merge } from 'rxjs';

@Controller('payment')
export class PaymentController {
  private readonly logger = new Logger(PaymentController.name);
  constructor(
    private readonly paymentService: PaymentService,
    private paymentEventService: PaymentEventService,
  ) {}

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

  @Sse('events')
  events(
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
    @Req() req: Request,
  ) {
    this.logger.verbose(
      `Sse подключение для пользователя userId=${payload.sub} login=${payload.login}`,
    );

    const subject$ = this.paymentEventService.addListner(payload.sub);

    req.on('close', () => {
      this.paymentEventService.removeListner(payload.sub, subject$);
    });
    const events$ = subject$.pipe(
      map((data) => ({
        data,
      })),
    );
    const heartbeat$ = interval(15000).pipe(
      map(() => ({ data: { type: 'ping' } })),
    );
    return merge(heartbeat$, events$);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.paymentService.findOne(id, payload);
  }
}
