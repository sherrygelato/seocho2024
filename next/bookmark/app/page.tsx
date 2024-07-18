'user client';

import Book from '@/components/Book';
import { Button } from '@/components/ui/button';
import { Book as BookType } from '@/lib/types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState<BookType[]>([]);

  const saveBook = async (book: BookType) => {};

  useEffect(() => {
    (async function () {
      const res = await fetch('/api/books');
      const data = await res.json();
      setBooks(data.books);
    })();
  }, []);

  return (
    <div className='v-[90vh] w-full flex flex-col items-center justify-between p-24'>
      <div className='mb-32 flex overflow-x-auto  text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'>
        {books.map((book) => (
          <Book key={book.id} book={book} saveBook={saveBook} />
        ))}
        <form>
          <Button>+ Add BookMark</Button>
        </form>
      </div>
    </div>
  );
}
