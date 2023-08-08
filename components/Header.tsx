'use client';
import {usePathname, useParams} from 'next/navigation';
import Link from 'next/link';
import ChangeLocale from './ChangeLocale';

const Header = () => {
  const pathName = usePathname();
  const locale = useParams()?.locale;

  return (
    <header>
      <nav className="flex gap-2 mb-2">
        <Link
          href={`/${locale}`}
          className={pathName === `/${locale}` ? 'text-blue-700' : ''}
        >
          Home
        </Link>
        <Link
          href={`/${locale}/about`}
          className={pathName === `/${locale}/about` ? 'text-blue-700' : ''}
        >
          About
        </Link>
      </nav>
      <ChangeLocale />
    </header>
  );
};

export default Header;
