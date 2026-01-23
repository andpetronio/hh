import es from "./es";
import ptBR from "./pt-BR";
import type { Locale } from "./locales";
import type { Translations } from "./schema";

const translations: Record<Locale, Translations> = {
  es,
  "pt-BR": ptBR,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
