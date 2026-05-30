import { ConflictException, Injectable } from '@nestjs/common';
import { AuthRepository } from '../auth.repository';
import { genSalt, compare, hash } from 'bcryptjs';

@Injectable()
export class RegisterService {
  constructor(private readonly authRepository: AuthRepository) {}

  async register(login: string, password?: string) {
    const user = await this.authRepository.findUserLoginByLogin(login);

    if (user?.login === login) {
      throw new ConflictException('User with this login already exists');
    }
    const salt = await genSalt();
    const passwordHash = password && (await hash(password, salt));
    const newUser = await this.authRepository.createUser({
      wallet: {
        create: {},
      },
      login,
      passwordHash,
    });

    return newUser;
  }
}
