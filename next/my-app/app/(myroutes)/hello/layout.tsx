'use client';

import Link from 'next/link';
import {
  useRouter,
  usePathname,
  redirect, // useSearchParams,
  // useParams,
} from 'next/navigation';
import React from 'react';

const TIMES = ['morning', 'afternoon', 'evening'];

export default function HelloLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter(); // useRouter(navigation) push로 적용할 수 있다.
  const go = (target: string) => {
    console.log(`🚀 go target : go ${target}`);
    router.push(`${target}`); // client에서 page 전환
  };

  const pathname = usePathname(); // client에서 page 전환
  console.log(`🚀 pathname : ${pathname}`);
  if (pathname.endsWith('evening')) redirect('/hello'); // redirect는 server에서 page 전환

  // const searchParams = useSearchParams(); // client에서 page 전환
  // const sid = searchParams.get('id');
  // console.log(`🚀 searchParams : ${searchParams}, sid : ${sid}`);

  // // update searchParams example
  // // new URLSearchParams(searchParams.toString());는 node 기본 제공
  // const setSearchParam = (name: string, value: string) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   console.log(`🚀 params : ${params}`);

  //   params.set(name, value);

  //   if (router && pathname) {
  //     return router.push(`${pathname}?${params.toString()}`);
  //   }
  //   return params.toString();
  // };

  // // const idPwParams = useParams<{ id: string; pw: string }>();
  // // console.log('🚀 idPwParams:', idPwParams);

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
          <span key={time}>
            <Link href={`/hello/${time}`} scroll={true}>
              {time.toUpperCase()}
            </Link>
            <span className='mx-2 text-green-300'>|</span>
          </span>
        ))}
        <Link href='/hello' scroll={true}>
          Hello
        </Link>
        <span className='mx-2 text-green-300'>|</span>
        <button className='btn-primary' onClick={() => go('/hello')}>
          Go Hello
        </button>
        {/* <span className='mx-2 text-green-300'>|</span>
        <button
          className='btn-danger'
          onClick={() => setSearchParam('id', '999')}
        >
          Search Hello
        </button> */}
      </div>
      <div className='m-5'>{children}</div>
    </>
  );
}
