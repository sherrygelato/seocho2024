'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import LabelTypeInput from '@/components/LabelTypeInput';

export default function RegistPage() {
  const router = useRouter();
  const [msg, setMsg] = useState('');
  // TODO : ref 진행해야 함
  const nicknameRef = useRef<HTMLInputElement>(null);

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nickname = formData.get('nickname');
    const email = formData.get('email');
    const passwd = formData.get('passwd');
    const passwd2 = formData.get('passwd2');

    if (!nickname) {
      nicknameRef.current?.focus();
      return setMsg('Input the nickname, plz..');
    }

    if (!email) {
      return setMsg('Input the email, plz..');
    }

    if (!passwd || passwd !== passwd2) {
      return setMsg('Input the password correctly!');
    }

    setMsg('');
    const res = await fetch('/api/regist', {
      method: 'POST',
      body: JSON.stringify({ nickname, email, passwd }),
    });
    console.log('🚀  res:', res);

    if (res.ok) return router.push('/');

    setMsg(res.statusText);
  };

  return (
    <div className='flex flex-col mx-auto max-w-md text-center mt-5'>
      <h1 className='text-3ml'>Sign up</h1>
      <form onSubmit={register} className='mt-5'>
        <LabelTypeInput label={'nickname'} value={'nickname'} type={'text'} />
        <LabelTypeInput label={'email'} value={'email'} type={'email'} />
        <LabelTypeInput label={'passwd'} value={'passwd'} type={'password'} />
        <LabelTypeInput label={'passwd2'} value={'passwd2'} type={'password'} />

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
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
