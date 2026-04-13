import { Injectable } from '@nestjs/common';
import { ClientTypeRepository } from './client-type.repository';

@Injectable()
export class ClientTypeService {
  constructor(private readonly clientTypeRepository: ClientTypeRepository) {}

  async exist(clientType: string) {
    return this.clientTypeRepository.exist(clientType);
  }
}
