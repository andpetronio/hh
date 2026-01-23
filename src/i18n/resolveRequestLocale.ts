import type { Locale } from './locales';

export function resolveRequestLocale(request: Request): Locale {
  const cookie = request.headers.get('cookie');
  if (!cookie) return 'es';

  const match = cookie.match(/locale=(es|pt-BR)/);
  return match ? (match[1] as Locale) : 'es';
}
