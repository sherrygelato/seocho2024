export type User = {
  id: number;
  username: string;
  email: string;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${URL}/users/`);
  return res.json();
};

export const getTodos = async (userId: number): Promise<Todo[]> => {
  // const res = await fetch(`${URL}/users/${userId}/todos`); // SSR

  // const res = await fetch(`${URL}/users/${userId}/todos`, {
  //   cache: 'no-store',
  // }); // SSG

  const res = await fetch(`${URL}/users/${userId}/todos`, {
    next: { revalidate: 10 },
  }); // ISR
  return res.json();
};

// export const getTodo = async (todoId: number) => {}
