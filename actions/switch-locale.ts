'use server';

import {cookies} from 'next/headers';
import {LANGUAGE_COOKIE} from '../i18n/settings';

export async function switchLocaleAction(value: string) {
  cookies().set(LANGUAGE_COOKIE, value);

  return {
    status: 'success',
  };
}
