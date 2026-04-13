import { Body, Controller, Get } from '@nestjs/common';
import { ClientTypeService } from './client-type.service';
import { Role } from '@/common/role/role.decorator';
import { ClientTypeExistDto } from './dto/client-type-exist.dto';

@Role('ADMIN')
@Controller('client-type')
export class ClientTypeController {
  constructor(private readonly clientTypeService: ClientTypeService) {}

  @Get('exist')
  exist(@Body() body: ClientTypeExistDto) {
    return this.clientTypeService.exist(body.clientTypeName);
  }
}
