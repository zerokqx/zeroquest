import { Inject, Injectable } from '@nestjs/common';
import { MfaStrategy } from './mfa-strategy.interface';
import { MFA_CLASS_TYPE, MfaName } from './mfa.types';
import { MFA_STRATEGIES } from './mfa-tokens';

@Injectable()
export class MfaResolverService {
  private strategyMap = new Map<string, MfaStrategy>();

  constructor(
    @Inject(MFA_STRATEGIES) private readonly strategies: MfaStrategy[],
  ) {
    this.strategies.forEach((str) => {
      if (str.type === MFA_CLASS_TYPE.STRATEGY)
        return this.strategyMap.set(str.name, str);
      throw new Error('Module is not have type strategy');
    });
  }

  resolveStrategy(name: MfaName): MfaStrategy {
    const strat = this.strategyMap.get(name);
    if (!strat) throw new Error(`Unknown strategy: ${name.toString()}`);
    return strat;
  }
}
