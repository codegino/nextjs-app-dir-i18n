import '../styles/tailwind.css';

export const metadata = {
  title: 'Next.js i18n',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="p-3">{children}</body>
    </html>
  );
}
