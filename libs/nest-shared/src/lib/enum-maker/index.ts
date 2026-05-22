export function enumMaker<const T extends readonly string[]>(...args: T) {
  return Object.fromEntries(
    args.map((v) => [v.toUpperCase(), v.toUpperCase()]),
  ) as {
    [K in T[number] as Uppercase<K>]: Uppercase<K>;
  };
}

