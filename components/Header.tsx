'use client';
import {usePathname, useParams} from 'next/navigation';
import Link from 'next/link';
import ChangeLocale from './ChangeLocale';
import {useTranslation} from '../i18n/client';
import type {LocaleTypes} from '../i18n/settings';

const Header = () => {
  const pathName = usePathname();
  const locale = useParams()?.locale as LocaleTypes;
  const {t} = useTranslation(locale, 'common');

  return (
    <header>
      <nav className="flex gap-2 mb-2">
        <Link
          href={`/${locale}`}
          className={
            pathName === `/${locale}` || pathName === '/' ? 'text-blue-700' : ''
          }
        >
          {t('home')}
        </Link>
        <Link
          href={`/${locale}/about`}
          className={
            pathName === `/${locale}/about` || pathName === '/about'
              ? 'text-blue-700'
              : ''
          }
        >
          {t('about')}
        </Link>
      </nav>
      <ChangeLocale />
    </header>
  );
};

export default Header;
