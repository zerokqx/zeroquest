import { OmitType } from '@nestjs/mapped-types';
import { RegisterDto } from '@/auth/register.dto';
export class PatchMeDto extends OmitType(RegisterDto, ['password'] as const) {}
