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

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${URL}/users/`);
  return res.json();
};

export const getTodos = async (userId: number): Promise<Todo[]> => {
  const res = await fetch(`${URL}/users/${userId}/todos`); // SSR 그때그때 매번 다르게

  // const res = await fetch(`${URL}/users/${userId}/todos`, {
  //   cache: 'no-store',
  // }); // SSG : 100% 캐시 yarn dev라서 캐시 확인 못함

  // const res = await fetch(`${URL}/users/${userId}/todos`, {
  //   next: { revalidate: 10 },
  // }); // ISR : 점진적
  return res.json();
};

export const getPhotos = async (albumId: number): Promise<Photo[]> => {
  const res = await fetch(`${URL}/albums/${albumId}/photos`);
  return res.json();
};
