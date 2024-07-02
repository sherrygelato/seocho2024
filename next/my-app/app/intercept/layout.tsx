import Link from 'next/link';
import { ReactNode } from 'react';

export default function InterceptorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <ul className='flex gap-5'>
        <li>
          <Link href='/intercept/ic1'>IC1</Link>
        </li>
        <li>
          <Link href='/intercept/ic2'>IC2</Link>
        </li>
        <li>
          <Link href='/intercept/ic3'>IC3</Link>
        </li>
        <li>
          <Link href='/about'>ABOUT</Link>
        </li>
      </ul>
    </>
  );
}
