import type {InitOptions} from 'i18next';

export const FALLBACK_LANG = 'en';
export const supportedLocales = ['en', 'zh-CN', 'sv'] as const;
export type Locales = (typeof supportedLocales)[number];
export const defaultNS = 'common';

export const USER_PREFERRED_LANGUAGE_COOKIE = 'user_preferred_language';

export function getOptions(lang = FALLBACK_LANG, ns = defaultNS): InitOptions {
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: supportedLocales,
    fallbackLng: FALLBACK_LANG,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
