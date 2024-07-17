import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BookmarkIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import Image from 'next/image';
import Link from 'next/link';

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
  let name;
  let email;
  let image;
  const session = await auth();

  if (session && session.user) {
    name = session.user.name;
    image = session.user.image;
    email = encodeURI(session.user.email || '');

    // const res = await fetch(`/api/regist?email=${email}`);
    // const user = await res.json();
  }
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <header className='shadow'>
            <nav className='flex flex-row justify-between p-5 v-[7vh]'>
              <div>
                <Link href='/' className='flex flex-row items-center'>
                  <BookmarkIcon className='flex' width={30} height={30} />
                  <span className='flex'>BookMark</span>
                </Link>
              </div>

              {session && session.user ? (
                <Link href='/my'>
                  <Image
                    src={image || ''}
                    alt={email || ''}
                    width={35}
                    height={35}
                    className='rounded-full'
                  />
                </Link>
              ) : (
                <div className='flex flex-row items-center'>
                  <Link href='/regist'>
                    <Button variant={'link'}>SignUp</Button>
                  </Link>
                  <div>|</div>
                  <Link href='/login'>
                    <Button variant={'link'}>SignIn</Button>
                  </Link>
                </div>
              )}
            </nav>
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
