import React from 'react';
import Header from '../components/Header';
import '../styles/tailwind.css';
import {getLocale} from '../i18n/server';
import {LocaleProvider} from '../hooks/locale-provider';

export const metadata = {
  title: 'Next.js i18n',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const locale = getLocale();
  return (
    <html lang={locale}>
      <LocaleProvider value={locale}>
        <body className="p-3">
          <Header />
          {children}
        </body>
      </LocaleProvider>
    </html>
  );
}
