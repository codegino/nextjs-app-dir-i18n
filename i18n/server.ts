import {createInstance} from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import {initReactI18next} from 'react-i18next/initReactI18next';
import {FALLBACK_LANG, getOptions, Locales, USER_PREFERRED_LANGUAGE_COOKIE} from './settings';
import {cookies} from 'next/headers'

const initI18next = async (lang: Locales, namespace: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (lang: string, ns: string) =>
          import(`./locales/${lang}/${ns}.json`),
      ),
    )
    .init(getOptions(lang, namespace));

  return i18nInstance;
};

export async function createTranslation(lang: Locales, ns: string) {
  const i18nextInstance = await initI18next(lang, ns);

  return {
    t: i18nextInstance.getFixedT(lang, Array.isArray(ns) ? ns[0] : ns),
  };
}

export function getLocale() {
    return  (cookies().get(USER_PREFERRED_LANGUAGE_COOKIE)?.value ?? FALLBACK_LANG) as Locales
}

