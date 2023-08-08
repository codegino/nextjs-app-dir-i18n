import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="flex gap-2 mb-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default Header;
