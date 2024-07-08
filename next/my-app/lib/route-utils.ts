import { redirect } from 'next/navigation';

export const TIMES = ['morning', 'afternoon', 'evening'];

export const goUserTodos = async (formData: FormData) => {
  const userId = formData.get('userId');
  ('use server');
  redirect(`/ssg/${userId}`);
};
