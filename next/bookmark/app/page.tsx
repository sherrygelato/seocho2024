import Book from '@/components/Book';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Book as BookType } from '@/lib/types';

export default async function Home() {
  const BookMarkList: string[] = ['SEYi', '강의', 'STUDY', 'etc'];

  // const session = await auth();
  // if (!session || !session.user) redirect('/api/auth/signin');

  // const res = await fetch(`/api/books?userId=${session.user.id}`);
  // const books: BookType[] = await res.json();
  // console.log('🚀 res:', res);

  const saveBook = async (book: BookType) => {
    //   const res = await fetch('/api/books', {
    //     method: book.id ? 'PATCH' : 'POST',
    //     body: JSON.stringify({
    //       ...book,
    //     }),
    //   });
    // console.log('🚀  res:', res);
  };

  return (
    <div className='v-[90vh] w-full flex flex-col items-center justify-between p-24'>
      <div className='mb-32 flex overflow-x-auto  text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'>
        {/* {books?.map((book) => (
          <Book key={book.id} book={book} saveBook={saveBook} />
        ))} */}
        <Book
          book={{
            id: 0,
            title: '테이터가 없습니다. 북마크를 추가해주세요.',
            owner: 0,
            clickdel: false,
          }}
          saveBook={saveBook}
        />
        <Button>+ Add BookMark</Button>
      </div>
    </div>
  );
}
