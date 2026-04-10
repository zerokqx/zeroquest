import { Injectable } from '@nestjs/common';
import { CreateInboundDto } from './dto/create-inbound.dto';
import { UpdateInboundDto } from './dto/update-inbound.dto';

@Injectable()
export class InboundService {
  create(createInboundDto: CreateInboundDto) {
    return 'This action adds a new inbound';
  }

  findAll() {
    return `This action returns all inbound`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inbound`;
  }

  update(id: number, updateInboundDto: UpdateInboundDto) {
    return `This action updates a #${id} inbound`;
  }

  remove(id: number) {
    return `This action removes a #${id} inbound`;
  }
}
