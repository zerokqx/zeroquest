import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateSubscribeDto } from './create-subscribe.dto';

export class UpdateSubscribeDto extends OmitType(
  PartialType(CreateSubscribeDto),
  ['link', 'planId', 'providerPaymentId'],
) {}
