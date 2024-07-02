'use client';

import Link from 'next/link';
import { ReactNode, useReducer } from 'react';

export default function ParallelLayout({
  login,
  profile,
  children,
}: {
  login: ReactNode;
  profile: ReactNode;
  children: ReactNode;
}) {
  const [isLogin, toggleLogin] = useReducer((pre) => !pre, false);
  return (
    <>
      <div className='bg-sky-300'>Header</div>

      <ul className='flex flex-row gap-5 border border-yellow-500'>
        <li>
          <Link href='/parallel'>/parallel</Link>
        </li>
        <li>
          <Link href='/parallel/aaa'>/parallel/aaa</Link>
        </li>
        <li>
          <Link href='/parallel/bbb'>/parallel/bbb</Link>
        </li>
        <li>
          <button className='btn-primary' onClick={() => toggleLogin()}>
            Toggle login
          </button>
        </li>
      </ul>

      <div className='mr-5'>{children}</div>

      <div className='flex justify-center gap-7 mt-5'>
        {!isLogin ? (
          <>
            <div className='border border-red-300 p-5 px-2'>{profile}</div>
            <div className='border border-blue-300 p-5 px-2'>{login}</div>
          </>
        ) : (
          login
        )}
      </div>

      <div className='bg-sky-300'>Footer</div>
    </>
  );
}
