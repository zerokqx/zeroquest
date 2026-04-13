import { Injectable } from '@nestjs/common';
import { CreateInboundDto } from './dto/create-inbound.dto';
import { UpdateInboundDto } from './dto/update-inbound.dto';
import { InboundRepository } from './inbound.repository';

@Injectable()
export class InboundService {
  constructor(private readonly inboundRepository: InboundRepository) {}
  async create(createInboundDto: CreateInboundDto) {
    return this.inboundRepository.create(createInboundDto);
  }

  async findAll() {
    return this.inboundRepository.findMany();
  }

  async findOneByInboundId(id: number) {
    return this.inboundRepository.findByInboundId(id);
  }
  async findOne(id: number) {
    return this.inboundRepository.findById(id);
  }

  async update(id: number, updateInboundDto: UpdateInboundDto) {
    return this.inboundRepository.updateById(id, updateInboundDto);
  }

  async remove(id: number) {
    return this.inboundRepository.deleteById(id);
  }
}
