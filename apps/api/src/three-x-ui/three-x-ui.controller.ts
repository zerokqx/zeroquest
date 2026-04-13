import { Role } from '@/common/role/role.decorator';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ThreeXUiService } from './three-x-ui.service';
import { XuiClient } from './dto/three-x-ui-client.dto';
import { ApiCookieAuth, ApiParam } from '@nestjs/swagger';
import { ApiRoleOnly } from '@/common/role/api-role-only.decorator';
import { LogAccessToRoute } from '@/common/decorators/log-access-to-route.decorator';

@Role('ADMIN')
@Controller('three-x-ui')
export class ThreeXUiController {
  constructor(private threeXUiService: ThreeXUiService) {}

  @LogAccessToRoute()
  @ApiRoleOnly('ADMIN')
  @Get()
  async getInbounds() {
    return this.threeXUiService.getInbounds();
  }

  @LogAccessToRoute()
  @ApiRoleOnly('ADMIN')
  @ApiCookieAuth('zeroquestAccess')
  @ApiParam({ type: XuiClient, name: 'Добавить клиента' })
  @Post()
  async addClient(@Body() body: XuiClient) {
    return this.threeXUiService.addClient(1, { clients: [body] });
  }
}
