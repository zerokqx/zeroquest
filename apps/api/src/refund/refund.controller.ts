import type { AuthServiceTypes } from '@zeroquest/types';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RefundService } from './refund.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { AuthPayload, Role } from '@zeroquest/nest-shared';
import {
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Refund')
@ApiCookieAuth('zeroquestAccess')
@Controller('refunds')
export class RefundController {
  constructor(private readonly refundService: RefundService) {}

  @Post()
  @ApiParam({
    type: CreateRefundDto,
    name: 'Создать заявку на возврат средств',
  })
  @ApiOperation({
    summary: 'Создать заявку на возврат',
    description:
      'Создаёт локальную заявку на возврат в БД. Внешний запрос в YooKassa не отправляется.',
  })
  @ApiOkResponse({
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
  approve(@Param('id', ParseIntPipe) id: number) {
    return this.refundService.approve(id);
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
