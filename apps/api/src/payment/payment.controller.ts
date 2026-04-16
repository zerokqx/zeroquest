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
import { GiveBonusDto } from './dto/give-bonus.dto';
import type { AuthServiceTypes } from '@zeroquest/types';
import { PaymentEventService } from './payment-event.service';
import { interval, map, merge } from 'rxjs';
import {
  ApiBody,
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiProduces,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthPayload, Role } from '@zeroquest/nest-shared';
import { WalletService } from '@/wallet/wallet.service';

@ApiTags('Payment')
@ApiCookieAuth('zeroquestAccess')
@Controller('payments')
export class PaymentController {
  private readonly logger = new Logger(PaymentController.name);
  constructor(
    private readonly paymentService: PaymentService,
    private readonly walletService: WalletService,
    private paymentEventService: PaymentEventService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Создать платёж',
    description:
      'Создаёт платёж у провайдера YooKassa и сохраняет локальную запись в таблице payments.',
  })
  @ApiBody({
    type: CreatePaymentDto,
    description: 'Данные для создания платежа.',
  })
  @ApiOkResponse({
    description: 'Платёж успешно создан.',
  })
  @ApiUnauthorizedResponse({
    description: 'Требуется access cookie для авторизации.',
  })
  async create(
    @Body() createPaymentDto: CreatePaymentDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.paymentService.create(createPaymentDto, payload);
  }

  @Role('ADMIN')
  @Post('bonuses')
  @ApiOperation({
    summary: 'Начислить бонус пользователю',
    description:
      'Админский роут. Начисляет бонус на баланс пользователя и пишет walletHistory с типом BONUS.',
  })
  @ApiBody({
    type: GiveBonusDto,
    description: 'Данные для начисления бонуса.',
  })
  @ApiOkResponse({
    description: 'Бонус успешно начислен.',
  })
  async giveBonus(@Body() body: GiveBonusDto) {
    return this.walletService.giveBonus(body);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список моих платежей',
    description: 'Возвращает платежи текущего пользователя.',
  })
  @ApiOkResponse({
    description: 'Список платежей успешно получен.',
  })
  async findAll(@AuthPayload() payload: AuthServiceTypes.JwtPayload) {
    return this.paymentService.findAll(payload);
  }

  @Sse('events')
  @ApiOperation({
    summary: 'SSE-стрим событий платежей',
    description:
      'Открывает text/event-stream соединение с heartbeat и пользовательскими событиями по платежам.',
  })
  @ApiProduces('text/event-stream')
  @ApiOkResponse({
    description: 'SSE-соединение успешно установлено.',
    schema: {
      example: 'event: message\ndata: {"type":"ping"}\n\n',
    },
  })
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
  @ApiOperation({
    summary: 'Получить платёж по id',
    description: 'Возвращает один платёж текущего пользователя.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор платежа.',
  })
  @ApiOkResponse({
    description: 'Платёж успешно найден.',
  })
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.paymentService.findOne(id, payload);
  }
}
