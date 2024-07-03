import Link from 'next/link';
import { getTodos } from '@/lib/placeholder';

// todos for each user
export default async function Todo({
  params: { userId },
}: {
  params: { userId: number };
}) {
  // server이기 때문에 클라이언트 hook ㄴㄴ
  const todos = await getTodos(userId);

  return (
    <>
      <Link href='/csr'>Go User List</Link>
      <hr className='w-24 mt-3' />
      <h1>Todos : {userId}</h1>
      <hr className='w-24 mt-3' />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? '' : 'line-through'}>
            title: {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
