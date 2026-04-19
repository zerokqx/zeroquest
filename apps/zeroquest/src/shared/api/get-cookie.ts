export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') {
    return null;
  }
  const match = new RegExp(`(?:^|; )${name}=([^;]*)`).exec(document.cookie);
  return match?.[1] ?? null;
};
