import LabelInput from '@/components/LabelInput';
import LogoutButton from '@/components/logout';
import { auth } from '@/lib/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function MyPage() {
  const session = await auth();

  if (!session || !session.user) redirect('/api/auth/signin');

  const {
    user: { name, email, image },
  } = session;
  return (
    <div className='flex flex-col mx-auto max-w-md my-10'>
      <h1 className='text-3xl text-slate-700'>My Profile</h1>

      <div className='flex flex-row'>
        <Image src={image || ''} alt={email || ''} width={100} height={100} />
        <div className='flex flex-col w-full'>
          <LabelInput
            label='Nickname'
            value={session?.user?.name || ''}
            readOnly={true}
          />
          <LabelInput
            label='email'
            value={session?.user?.email || ''}
            readOnly={true}
          />

          <LogoutButton />
        </div>
      </div>
      <hr className='mt-10' />
      <pre className='text-sm text-slate-400'>
        session: {JSON.stringify(session, null, '  ')}
      </pre>
    </div>
  );
}
