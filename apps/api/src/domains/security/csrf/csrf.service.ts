import { Injectable } from '@nestjs/common';
import { CsrfCacheService } from './csrf-cache.service';

@Injectable()
export class CsrfService {
  constructor(private readonly csrfCacheService: CsrfCacheService) {}

  generateCsrfToken() {
    return crypto.randomUUID();
  }

  async trackCsrfToken(token: string, fingerprint: string) {
    await this.csrfCacheService.trackCsrfToken(token, fingerprint);
    return token;
  }

  getToken(fingerprint: string) {
    return this.csrfCacheService.getToken(fingerprint);
  }

  deleteToken(fingerprint: string) {
    return this.csrfCacheService.deleteToken(fingerprint);
  }
}
