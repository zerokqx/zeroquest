import { Subject } from 'rxjs';

export class PaymentEventService {
  private listners = new Map<string, Set<Subject<unknown>>>();

  addListner(userId: string) {
    const subject$ = new Subject<unknown>();
    let set = this.listners.get(userId);
    if (!set) {
      set = new Set<Subject<unknown>>();
      this.listners.set(userId, set);
    }
    set.add(subject$);
    return subject$;
  }

  emit(userId: string, data: unknown) {
    const set = this.listners.get(userId);
    if (!set) return;
    set.forEach((subject$) => {
      subject$.next(data);
    });
  }

  removeListner(userId: string, subject$: Subject<unknown>) {
    const set = this.listners.get(userId);
    if (!set) return;
    set.delete(subject$);
  }
}
