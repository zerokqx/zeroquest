import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { AxiosResponse } from 'axios';

export class AxiosState {
  private refreshPromise: Promise<AxiosResponse> | null = null;
  private csrfPromise: Promise<void> | null = null;
  private fingerprint?: string;
  private handledErrors = new Set<string>();

  getRefreshPromise(refreshFn: () => Promise<AxiosResponse>) {
    this.refreshPromise ??= refreshFn().finally(() => {
      this.refreshPromise = null;
    });

    return this.refreshPromise;
  }

  getCsrfPromise(csrfFn: () => Promise<void>) {
    this.csrfPromise ??= csrfFn().finally(() => {
      this.csrfPromise = null;
    });

    return this.csrfPromise;
  }

  async getFingerprint() {
    if (this.fingerprint) return this.fingerprint;

    const fp = await FingerprintJS.load();
    const result = await fp.get();

    this.fingerprint = result.visitorId;

    return this.fingerprint;
  }

  handleOnce(key: string, callback: () => void) {
    if (this.handledErrors.has(key)) return false;
    this.handledErrors.add(key);
    callback();
    return true;
  }

  resetHandled(key: string) {
    this.handledErrors.delete(key);
  }

  resetAllHandled() {
    this.handledErrors.clear();
  }
}
