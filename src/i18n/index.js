import { es } from './es.js';
import { ptBR } from './pt-BR.js';

const translations = {
  'es': es,
  'pt-BR': ptBR
};

export function getTranslations(locale = 'es') {
  return translations[locale] || translations['es'];
}

export function t(locale, path) {
  const trans = getTranslations(locale);
  const keys = path.split('.');
  let value = trans;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || path;
}
