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

@Controller('inbound')
export class InboundController {
  constructor(private readonly inboundService: InboundService) {}

  @Post()
  create(@Body() createInboundDto: CreateInboundDto) {
    return this.inboundService.create(createInboundDto);
  }

  @Get()
  async findAll() {

    return fetch('https://89.125.54.155:20262/r6MpYwYdkrIngyJO4V/api/login',{body:{
      username:'k6RcFVCa7Z',
      password:"SQtzzZwTRl"
    },method:'POST'})
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inboundService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInboundDto: UpdateInboundDto) {
    return this.inboundService.update(+id, updateInboundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inboundService.remove(+id);
  }
}
