import { BookmarkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { auth } from '@/lib/auth';

export default async function Nav() {
  const session = await auth();
  // console.log('🚀  session:', session);

  let name;
  let image;
  let email;

  if (session && session.user) {
    name = session.user.name;
    image = session.user.image;
    email = encodeURI(session.user.email || '');

    // const res = await fetch(`http://localhost:3000/api/regist`);
    // const res = await fetch(`/api/regist`);
    // console.log('🚀  res:', res);
    // const user = await res.json();
    // console.log('🚀  user:', user);
  }

  return (
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
  );
}
