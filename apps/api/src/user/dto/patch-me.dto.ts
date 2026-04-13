import { OmitType } from '@nestjs/mapped-types';
import { RegisterDto } from '@/auth/dto/register.dto';
export class PatchMeDto extends OmitType(RegisterDto, ['password'] as const) {}
