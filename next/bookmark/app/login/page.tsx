'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import LabelTypeInput from '@/components/LabelTypeInput';

export default function LoginPage() {
  const router = useRouter();
  const [msg, setMsg] = useState('');

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const passwd = formData.get('passwd');

    if (!email) {
      return setMsg('Input the email, plz..');
    }
    if (!passwd) {
      return setMsg('Input the password correctly!');
    }

    setMsg('');

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, passwd }),
    });
    console.log('🚀  res:', res);

    if (res.ok) return router.push('/');

    setMsg(res.statusText);
  };

  return (
    <div className='flex flex-col mx-auto max-w-md text-center mt-5'>
      <h1 className='text-3ml'>Login</h1>
      <form onSubmit={login} className='mt-5'>
        <LabelTypeInput label={'email'} value={'email'} type={'email'} />
        <LabelTypeInput label={'passwd'} value={'passwd'} type={'password'} />

        {!!msg && (
          <Alert className='text-red-500 my-3'>
            <div className='h-4 w-4 text-red-300' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{msg}</AlertDescription>
          </Alert>
        )}

        <div className='grid grid-cols-4 items-center gap-4 m-3'>
          <div className='col-span-3'></div>
          <Button variant={'secondary'} type='submit'>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
