import { getTodo } from '@/lib/placeholder';

// import { goUserTodos } from '@/lib/route-utils';

export const dynamic = 'force-dynamic';

export default async function Ssr() {
  const todo = await getTodo(1);
  if (!todo.id) throw new Error('Error');
  return (
    <>
      <h1 className='text-2xl'>SSR</h1>
      <h1>
        {Math.random()}:: {new Date().toLocaleDateString()}
      </h1>
      {/* <form action={goUserTodos}>
        ID :{' '}
        <input
          type='number'
          name='userId'
          className='border-r-amber-50 border '
        />
      </form> */}
      <h1>TODO ID :{todo.id}</h1>
    </>
  );
}
