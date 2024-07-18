import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BookMark App',
  description: 'BookMark',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <header className='shadow'>
            <Nav />
          </header>
          <main className='w-full overflow-y-hidden'>{children}</main>
          <footer className='mt-auto text-center flex flex-row justify-center'>
            <div className='mx-5 fixed bottom-0 left-0 flex w-full items-end justify-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none'>
              <div
                className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
                rel='noopener noreferrer'
              >
                &#169; sherrygelato - seocho2024
              </div>
            </div>
            <div className='mx-5 fixed bottom-0 left-0 flex w-full items-end justify-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none'>
              <a
                className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
                href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                By{' '}
                <Image
                  src='/vercel.svg'
                  alt='Vercel Logo'
                  className='dark:invert'
                  width={50}
                  height={12}
                  priority
                />
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
