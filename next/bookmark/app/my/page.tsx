import LabelInput from '@/components/LabelInput';
import { Button } from '@/components/ui/button';
import { auth, signOut } from '@/lib/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function MyPage() {
  const session = await auth();
  if (!session || !session.user) redirect('/api/auth/signin');

  const {
    user: { name, email, image },
  } = session;

  const logout = async () => {
    'use server';
    await signOut();
  };

  return (
    <div className='flex flex-col mx-auto max-w-md my-10'>
      <div>
        <h1 className='text-center text-3xl text-slate-700'>My Profile</h1>
      </div>
      <div className='grid grid-cols-6'>
        <div className='col-span-2'>
          <Image
            src={image || ''}
            alt={email || ''}
            width={100}
            height={100}
            className='h-full w-full p-3'
          />
        </div>
        <form className='col-span-4' action={logout}>
          <LabelInput label='Nickname' value={name || ''} readOnly={true} />
          <LabelInput label='email' value={email || ''} readOnly={true} />
          <div className='col-span-3'></div>
          <Button variant='ghost'>SignOut</Button>
        </form>
      </div>
      <hr className='mt-10' />
      {/* <div>
        <pre className='text-sm text-slate-400'>
          session: {JSON.stringify(session, null, '  ')}
        </pre>
      </div> */}
    </div>
  );
}
