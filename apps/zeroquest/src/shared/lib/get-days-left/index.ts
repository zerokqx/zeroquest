export function getDaysLeft(dateString: string): number {
  const now = new Date();
  const target = new Date(dateString);

  const diffMs = target.getTime() - now.getTime();

  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}
