import { ReactElement } from 'react';
import Link from 'next/link';

const Header = (): ReactElement => {
  return (
    <header className="bg-emerald-900 p-4 sticky top-0 z-10">
      <Link
        href="/"
        className="flex flex-col flex-1 items-center justify-center text-white font-semibold text-xl tracking-tight"
      >
        yanf Next.js Framework
      </Link>
    </header>
  );
};

export default Header;
