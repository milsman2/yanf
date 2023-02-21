import { ReactElement } from 'react';
import Link from 'next/link';

const Footer = (): ReactElement => {
  return (
    <footer className="flex flex-wrap justify-between p-2 bg-emerald-900 mt-auto sticky bottom-0">
      <Link href="https://eadotechnologies.com" className="text-white text-sm">
        <div>Brought to you by Eado Technologies</div>
      </Link>
      <Link href="https://blog.kanebroslab.com" className="text-white text-sm">
        <div>Self-Hosted Documentation</div>
      </Link>
    </footer>
  );
};

export default Footer;
