import { Module } from '@nestjs/common';
import { ClientTypeService } from './client-type.service';
import { ClientTypeController } from './client-type.controller';
import { ClientTypeRepository } from './client-type.repository';

@Module({
  controllers: [ClientTypeController],
  providers: [ClientTypeService, ClientTypeRepository],
  exports: [ClientTypeRepository],
})
export class ClientTypeModule {}
