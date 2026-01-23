import { DEFAULT_LOCALE, type Locale } from "./locales";
import { resolveLocale } from "./resolveLocale";

const STORAGE_KEY = "locale";

/**
 * Devuelve el locale activo.
 * - En SSR: DEFAULT_LOCALE
 * - En client: localStorage → validado
 */
export function getClientLocale(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return resolveLocale(stored);
}

/**
 * Persiste el locale en localStorage.
 * Acepta solo Locale válido (tipado)
 */
export function setClientLocale(locale: Locale): void {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(STORAGE_KEY, locale);
}
