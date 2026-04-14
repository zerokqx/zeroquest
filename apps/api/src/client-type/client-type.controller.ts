import { Body, Controller, Get } from '@nestjs/common';
import { ClientTypeService } from './client-type.service';
import { ClientTypeExistDto } from './dto/client-type-exist.dto';
import {
  ApiBody,
  ApiCookieAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Role } from '@zeroquest/nest-shared';

@ApiTags('Client Type')
@ApiCookieAuth('zeroquestAccess')
@Role('ADMIN')
@Controller('client-type')
export class ClientTypeController {
  constructor(private readonly clientTypeService: ClientTypeService) {}

  @Get('exist')
  @ApiOperation({
    summary: 'Проверить существование client type',
    description: 'Проверяет, существует ли запись типа клиента в таблице client_types.',
  })
  @ApiBody({
    type: ClientTypeExistDto,
    description: 'Название client type для проверки.',
  })
  @ApiOkResponse({
    description: 'Результат проверки существования client type.',
    schema: { example: true },
  })
  @ApiForbiddenResponse({
    description: 'Доступ разрешён только пользователю с ролью ADMIN.',
  })
  exist(@Body() body: ClientTypeExistDto) {
    return this.clientTypeService.exist(body.clientTypeName);
  }
}
