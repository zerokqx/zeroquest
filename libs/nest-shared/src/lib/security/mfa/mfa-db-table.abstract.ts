export type MfaDelegate<T, W, C, U> = {
  findUnique(args: { where: W }): Promise<T | null>;
  create(args: { data: C }): Promise<T>;
  update(args: { where: W; data: U }): Promise<T>;
  delete(args: { where: W }): Promise<T>;
};

export abstract class MfaDBTable<T extends object, W, C, U> {
  protected constructor(protected readonly delegate: MfaDelegate<T, W, C, U>) {}

  get(where: W): Promise<T | null> {
    return this.delegate.findUnique({ where });
  }

  create(data: C): Promise<T> {
    return this.delegate.create({ data });
  }

  update(where: W, data: U): Promise<T> {
    return this.delegate.update({ where, data });
  }

  delete(where: W): Promise<T> {
    return this.delegate.delete({ where });
  }
}
