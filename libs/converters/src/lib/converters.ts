/**
 * Преобразует сумму из минимальных единиц (например, копейки/центы)
 * в строку с основной валютой (например, рубли/доллары).
 *
 * @param {number} amountMinor - Сумма в минимальных единицах (например, 1234 = 12.34).
 * @returns {string} Строка с суммой в основных единицах с точностью до 2 знаков.
 *
 * @example
 * fromPenny(1234); // "12.34"
 * fromPenny(0);    // "0.00"
 */
export function fromPenny(amountMinor: number): string {
  if (typeof amountMinor !== 'number') return '0.00';
  return (amountMinor / 100).toFixed(2);
}

/**
 * Преобразует строку с суммой в основных единицах (например, рубли/доллары)
 * в минимальные единицы (например, копейки/центы).
 *
 * Принимает только корректные числовые строки с максимум 2 знаками после точки.
 * При некорректном вводе возвращает 0.
 *
 * @param {string} amount - Сумма в виде строки (например, "12.34").
 * @returns {number} Сумма в минимальных единицах (например, 1234).
 *
 * @example
 * toPenny("12.34"); // 1234
 * toPenny("1");     // 100
 * toPenny("0.5");   // 50
 * toPenny("abc");   // 0
 */
export function toPenny(amount: string): number {
  if (typeof amount !== 'string') return 0;

  const amountClear = amount.trim();

  if (amountClear.length === 0 || !/^\d+(\.\d{1,2})?$/.test(amountClear))
    return 0;

  return Math.round(Number(amount) * 100);
}



