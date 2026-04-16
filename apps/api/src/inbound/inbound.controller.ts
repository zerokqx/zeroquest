import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InboundService } from './inbound.service';
import { CreateInboundDto } from './dto/create-inbound.dto';
import { UpdateInboundDto } from './dto/update-inbound.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCookieAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import {
  ApiClientType,
  ClientType,
  Role,
} from '@zeroquest/nest-shared';

@ApiTags('Inbound')
@ApiCookieAuth('zeroquestAccess')
@Role('ADMIN')
@ClientType('web')
@Controller('inbounds')
export class InboundController {
  constructor(private readonly inboundService: InboundService) {}

  @ApiClientType()
  @ApiCookieAuth('zeroquestAccess')
  @Post()
  @ApiOperation({
    summary: 'Создать inbound',
    description: 'Создаёт inbound-конфигурацию. Доступно только ADMIN для web client type.',
  })
  @ApiBody({
    type: CreateInboundDto,
    description: 'Данные для создания inbound.',
  })
  @ApiOkResponse({
    description: 'Inbound успешно создан.',
  })
  @ApiBadRequestResponse({
    description: 'Некорректные данные для создания inbound.',
  })
  @ApiForbiddenResponse({
    description: 'Доступ разрешён только ADMIN.',
  })
  async create(@Body() createInboundDto: CreateInboundDto) {
    return this.inboundService.create(createInboundDto);
  }

  @ApiClientType()
  @ApiCookieAuth('zeroquestAccess')
  @Get()
  @ApiOperation({
    summary: 'Получить список inbound',
    description: 'Возвращает список всех inbound-конфигураций.',
  })
  @ApiOkResponse({
    description: 'Список inbound успешно получен.',
  })
  async findAll() {
    return this.inboundService.findAll();
  }

  @ApiClientType()
  @ApiCookieAuth('zeroquestAccess')
  @Get(':id')
  @ApiOperation({
    summary: 'Получить inbound по id',
    description: 'Возвращает одну inbound-конфигурацию по внутреннему идентификатору.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор inbound.',
  })
  @ApiOkResponse({
    description: 'Inbound успешно найден.',
  })
  async findOne(@Param('id') id: string) {
    return this.inboundService.findOne(+id);
  }

  @ApiClientType()
  @ApiCookieAuth('zeroquestAccess')
  @Patch(':id')
  @ApiOperation({
    summary: 'Обновить inbound',
    description: 'Обновляет inbound-конфигурацию по id.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор inbound.',
  })
  @ApiBody({
    type: UpdateInboundDto,
    description: 'Поля inbound для обновления.',
  })
  @ApiOkResponse({
    description: 'Inbound успешно обновлён.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateInboundDto: UpdateInboundDto,
  ) {
    return this.inboundService.update(+id, updateInboundDto);
  }

  @ApiClientType()
  @ApiCookieAuth('zeroquestAccess')
  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить inbound',
    description: 'Удаляет inbound-конфигурацию по id.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор inbound.',
  })
  @ApiOkResponse({
    description: 'Inbound успешно удалён.',
  })
  async remove(@Param('id') id: string) {
    return this.inboundService.remove(+id);
  }
}
