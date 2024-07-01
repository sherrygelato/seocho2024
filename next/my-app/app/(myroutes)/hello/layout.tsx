import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hello Page',
  description: 'Hello nextJS',
};

const TIMES = ['morning', 'afternoon', 'evening'];

export default function HelloLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className='text-xl'>Hello Layout</h1>
      <div>
        <Link href='/'>Home</Link>
        <span className='mx-2 text-green-300'>|</span>
        {/* 
        <Link href='/hello/morning'>Morning</Link>
        <span className='mx-2 text-green-300'>|</span>
        <Link href='/hello/afternoon'>Afternoon</Link>
        <span className='mx-2 text-green-300'>|</span>
        <Link href='/hello/evening' scroll={false}>
          Evening
        </Link>
        <span className='mx-2 text-green-300'>|</span>
         */}
        {TIMES.map((time) => (
          <>
            <Link href={`/hello/${time}`} scroll={true}>
              {time.toUpperCase()}
            </Link>
            <span className='mx-2 text-green-300'>|</span>
          </>
        ))}
        <Link href='/hello' scroll={true}>
          Hello
        </Link>
      </div>
      <div className='m-5'>{children}</div>
    </>
  );
}
