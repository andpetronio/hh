import { SUPPORTED_LOCALES, DEFAULT_LOCALE, type Locale } from "./locales";

export function resolveLocale(raw?: string | null): Locale {
  if (!raw) return DEFAULT_LOCALE;

  if ((SUPPORTED_LOCALES as readonly string[]).includes(raw)) {
    return raw as Locale;
  }

  return DEFAULT_LOCALE;
}
