'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegistPage() {
  const router = useRouter();
  const [msg, setMsg] = useState('');

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nickname = formData.get('nickname');
    const email = formData.get('email');
    const passwd = formData.get('passwd');
    const passwd2 = formData.get('passwd2');

    if (!nickname) {
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
    <div className='flex flex-col mx-auto max-w-md text-center mt-10'>
      <h1 className='text-3ml'>Sign up</h1>
      <form onSubmit={register} className=''>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='nickname'>nickname</Label>
          <Input
            id='nickname'
            name='nickname'
            type='text'
            placeholder='nickname...'
            className='col-span-3'
          />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='email'>email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='email...'
            className='col-span-3'
          />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='password'>password</Label>
          <Input
            id='password'
            name='password'
            type='password'
            className='col-span-3'
          />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='password2'>password</Label>
          <Input
            id='password2'
            name='password2'
            type='password'
            className='col-span-3'
          />
        </div>

        {!!msg && (
          <Alert className='text-red-500 my-3'>
            <div className='h-4 w-4 text-red-300' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{msg}</AlertDescription>
          </Alert>
        )}

        <Button variant={'secondary'} type='submit' className='1/2'>
          Register
        </Button>
      </form>
    </div>
  );
}
