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
import { Role } from '@/common/role/role.decorator';
import {
  ApiClientType,
  ClientType,
} from '@/client-type/client-type.decorator';
import { ApiCookieAuth, ApiParam } from '@nestjs/swagger';


@ApiCookieAuth('zeroquestAccess')
@Role('ADMIN')
@ClientType('web')
@Controller('inbound')
export class InboundController {
  constructor(private readonly inboundService: InboundService) {}

  @ApiParam({
    type: CreateInboundDto,
    name: 'Создание inbound',
  })
  @ApiClientType()
  @ApiCookieAuth('zeroquestAccess')
  @Post()
  async create(@Body() createInboundDto: CreateInboundDto) {
    return this.inboundService.create(createInboundDto);
  }

  @ApiClientType()
  @ApiCookieAuth('zeroquestAccess')
  @Get()
  async findAll() {
    return this.inboundService.findAll();
  }

  @ApiClientType()
  @ApiCookieAuth('zeroquestAccess')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.inboundService.findOne(+id);
  }

  @ApiClientType()
  @ApiParam({
    type: UpdateInboundDto,
    name: 'Изменение inbound',
  })
  @ApiCookieAuth('zeroquestAccess')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInboundDto: UpdateInboundDto,
  ) {
    return this.inboundService.update(+id, updateInboundDto);
  }

  @ApiClientType()
  @ApiCookieAuth('zeroquestAccess')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.inboundService.remove(+id);
  }
}
