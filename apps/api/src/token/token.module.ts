import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '@/auth/constants';

@Module({
  imports:[

    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  providers: [TokenService],
  exports:[TokenService]
})
export class TokenModule {}
