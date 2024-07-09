import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTodo, Todo as TodoType } from '@/lib/placeholder';

type Params = { params: { todoId: number } };

export async function generateMetadata({
  params: { todoId },
}: Params): Promise<Metadata> {
  const todo: TodoType = await getTodo(todoId);
  return {
    title: todo.title,
  };
}

export default async function Todo({
  params: { todoId },
}: {
  params: { todoId: number };
}) {
  const todo: TodoType = await getTodo(todoId);
  if (!todo.id) return notFound();

  return (
    <>
      <h1 className='text-2xl'>ID: {todo.id}</h1>
      <h3 className='text-xl'>{todo.title}</h3>
    </>
  );
}
