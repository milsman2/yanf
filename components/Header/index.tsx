import { ReactElement } from 'react';
import Link from 'next/link';

const Header = (): ReactElement => {
  return (
    <h1 className="flex justify-between flex-wrap content-center bg-gray-800 p-4 sticky top-0 z-10">
      <div className="flex items-center text-white">
        <span className="font-semibold text-xl tracking-tight">
          <Link href="/">yanf Next.js Framework</Link>
        </span>
      </div>
    </h1>
  );
};

export default Header;
