'use server';

import {cookies} from 'next/headers';
import {Locales, USER_PREFERRED_LANGUAGE_COOKIE} from '../i18n/settings';

export async function switchLanguageAction(value: Locales) {
  cookies().set(USER_PREFERRED_LANGUAGE_COOKIE, value);

  return {
    status: 'success',
  };
}
