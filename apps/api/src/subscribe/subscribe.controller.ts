import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';
import { Role } from '@/common/role/role.decorator';
import { AuthPayload } from '@/auth/auth.decorator';
import type { AuthServiceTypes } from '@zeroquest/types';

@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Role('ADMIN')
  @Post()
  create(
    @Body() createSubscribeDto: CreateSubscribeDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.create(createSubscribeDto, payload);
  }

  @Get()
  findAll(@AuthPayload() payload: AuthServiceTypes.JwtPayload) {
    return this.subscribeService.findAll(payload);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,

    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.findOne(+id, payload);
  }

  @Role('ADMIN')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubscribeDto: UpdateSubscribeDto,

    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.update(+id, payload, updateSubscribeDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,

    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.remove(+id, payload);
  }
}
