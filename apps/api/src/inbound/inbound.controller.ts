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
import { ThreeXUiService } from '@/three-x-ui/three-x-ui.service';

@Controller('inbound')
export class InboundController {
  constructor(
    private readonly inboundService: InboundService,

    private readonly threeXUiService: ThreeXUiService,
  ) {}

  @Post()
  async create(@Body() createInboundDto: CreateInboundDto) {

    return this.inboundService.create(createInboundDto);
  }

  @Get()
  async findAll() {
    return this.threeXUiService.request('/inbounds/list', {});
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
  async remove(@Param('id') id: string) {
    return this.inboundService.remove(+id);
  }
}
