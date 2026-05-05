import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserCache } from './user.cache';
import { UserAdminController } from './user-admin.controller';

@Module({
  controllers: [UserController, UserAdminController],
  providers: [UserService, UserRepository, UserCache],
  exports: [UserService],
})
export class UserModule {}
