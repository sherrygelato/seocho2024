import { redirect } from 'next/navigation';

export const TIMES = ['morning', 'afternoon', 'evening'];

export const goUserTodos = async (formData: FormData) => {
  'use server';
  // trpc server와 client

  const userId = formData.get('userId');
  redirect(`/ssg/${userId}`);
};
