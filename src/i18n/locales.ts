export const SUPPORTED_LOCALES = ["es", "pt-BR"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";