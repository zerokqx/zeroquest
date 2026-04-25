import type { AuthServiceTypes } from '@zeroquest/types';
import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RefundService } from './refund.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { AuthPayload, Role } from '@zeroquest/nest-shared';
import {
  ApiBody,
  ApiHeader,
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { RefundEntity } from './entities/refund.entity';
import {
  IDEMPOTENCE_KEY_HEADER,
  IDEMPOTENCE_KEY_HEADER_DESCRIPTION,
} from '@/domains/billing/payment/dto/create-payment.dto';

@ApiTags('Refund')
@ApiCookieAuth('zeroquestAccess')
@Controller('refunds')
export class RefundController {
  constructor(private readonly refundService: RefundService) {}

  @Post()
  @ApiBody({
    type: CreateRefundDto,
    description: 'Создать заявку на возврат средств',
  })
  @ApiOperation({
    summary: 'Создать заявку на возврат',
    description:
      'Создаёт локальную заявку на возврат в БД. Внешний запрос в YooKassa не отправляется.',
  })
  @ApiOkResponse({
    type: RefundEntity,
    description: 'Заявка на возврат успешно создана.',
  })
  create(
    @Body() createRefundDto: CreateRefundDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.refundService.create(createRefundDto, payload);
  }

  @Role('ADMIN')
  @Get()
  @ApiOperation({
    summary: 'Получить все заявки на возврат',
    description: 'Админский эндпоинт. Возвращает все заявки на возврат из БД.',
  })
  @ApiOkResponse({
    type: RefundEntity,
    isArray:true,
    description: 'Список заявок на возврат успешно получен.',
  })
  findAll() {
    return this.refundService.findAll();
  }

  @Role('ADMIN')
  @Patch(':id/status/approved')
  @ApiOperation({
    summary: 'Подтвердить возврат',
    description:
      'Админский эндпоинт. Отправляет запрос на возврат в YooKassa и выставляет статус APPROVE.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор заявки на возврат.',
  })
  @ApiHeader({
    name: IDEMPOTENCE_KEY_HEADER,
    required: false,
    description: IDEMPOTENCE_KEY_HEADER_DESCRIPTION,
  })
  approve(
    @Param('id', ParseIntPipe) id: number,
    @Headers(IDEMPOTENCE_KEY_HEADER) idempotenceKey?: string,
  ) {
    return this.refundService.approve(id, idempotenceKey);
  }

  @Role('ADMIN')
  @Patch(':id/status/rejected')
  @ApiOperation({
    summary: 'Отклонить возврат',
    description:
      'Админский эндпоинт. Меняет статус заявки на возврат на REJECTED.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор заявки на возврат.',
  })
  reject(@Param('id', ParseIntPipe) id: number) {
    return this.refundService.reject(id);
  }
}
