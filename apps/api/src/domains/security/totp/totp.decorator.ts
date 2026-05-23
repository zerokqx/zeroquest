import { applyDecorators, Type } from '@nestjs/common';
import { ApiBody, ApiBodyOptions, IntersectionType } from '@nestjs/swagger';
import { TotpRequest } from './dto/totp-request.dto';

export const TotpApiBody = (options: ApiBodyOptions) =>
  applyDecorators(
    ApiBody({
      ...options,
      ...('type' in options && {
        type: IntersectionType(TotpRequest, options.type as Type),
      }),
    }),
  );
