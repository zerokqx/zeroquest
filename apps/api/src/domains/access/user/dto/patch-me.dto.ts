import { OmitType } from '@nestjs/mapped-types';
import { RegisterDto } from '@/domains/access/auth/dto/register.dto';
export class PatchMeDto extends OmitType(RegisterDto, ['password'] as const) {}
