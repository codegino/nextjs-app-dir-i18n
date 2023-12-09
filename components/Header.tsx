'use client';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import ChangeLocale from './ChangeLocale';
import {useTranslation} from '../i18n/client';

const Header = () => {
  const pathName = usePathname();
  const {t} = useTranslation('common');

  return (
    <header>
      <nav className="flex gap-2 mb-2">
        <Link href="/" className={pathName === '/' ? 'text-blue-700' : ''}>
          {t('home')}
        </Link>
        <Link
          href="/about"
          className={pathName === '/about' ? 'text-blue-700' : ''}
        >
          {t('about')}
        </Link>
      </nav>
      <ChangeLocale />
    </header>
  );
};

export default Header;
