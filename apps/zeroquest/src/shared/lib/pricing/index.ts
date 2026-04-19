export const toPercent = (value: unknown): number => {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
};

export const getDiscountedPrice = (
  price: number,
  discountPercent: number,
): number => {
  if (discountPercent <= 0) return price;
  return Math.round(price * (1 - discountPercent / 100));
};
