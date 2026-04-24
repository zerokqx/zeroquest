import { Public } from '@zeroquest/nest-shared';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, ParseEnumPipe, Query } from '@nestjs/common';
import { LegalDocumentType } from '@zeroquest/db';
import { PolicyService } from './policy.service';
import { PolicyEntity } from './entities/policy.entity';
import { CsrfPublic } from '@/domains/access/auth/csrf.decorator';

@CsrfPublic()
@ApiTags('Policy')
@ApiExtraModels(PolicyEntity)
@Controller('policy')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Get('actual')
  @Public()
  @ApiOperation({
    summary: 'Получить актуальный юридический документ',
    description:
      'Возвращает актуальную версию документа по типу или null, если документ отсутствует. Если type не передан, используется PRIVACY.',
  })
  @ApiQuery({
    name: 'type',
    required: false,
    enum: LegalDocumentType,
    description: 'Тип юридического документа.',
  })
  @ApiOkResponse({
    description: 'Актуальный документ успешно получен (или null).',
    type: PolicyEntity,
  })
  async getActual(
    @Query('type', new ParseEnumPipe(LegalDocumentType, { optional: true }))
    type?: LegalDocumentType,
  ) {
    return this.policyService.getActual(type ?? LegalDocumentType.PRIVACY);
  }
}
