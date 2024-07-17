'use client';

import { FormEvent, useEffect, useReducer, useRef } from 'react';
import Mark from './Mark';
import { Button } from './ui/button';
import LabelInput from './LabelInput';
import { Book as BookType } from '@/lib/types';

type SaveBook = (book: BookType) => Promise<void>;
type Props = {
  book: BookType;
  saveBook: SaveBook;
  f?: (i: number) => string;
};

export default function Book({ book, saveBook }: Props) {
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);
  const titleRef = useRef<HTMLInputElement>(null);

  const save = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    book.title = titleRef.current?.value || '';
    saveBook(book);
  };

  useEffect(() => {
    if (isEditing && titleRef.current) {
      titleRef.current.value = '';
      titleRef.current.focus();
    }
  }, [isEditing]);
  return (
    <div
      className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
      rel='noopener noreferrer'
    >
      {isEditing ? (
        <form onSubmit={save}>
          <LabelInput
            label={'bookmark'}
            value={'bookmark...'}
            readOnly={false}
            ref={titleRef}
          />
          <Button variant={'secondary'} size={'sm'}>
            cancel
          </Button>
          <Button size={'sm'}>Save</Button>
        </form>
      ) : (
        <h2 className='mb-3 text-2xl font-semibold'>
          {book.title}{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            <Button variant={'link'} onClick={() => toggleEditing()}>
              +
            </Button>
          </span>
        </h2>
      )}

      <p className='m-0 max-w-[30ch] text-sm opacity-50'>
        {book.title}에 맞는 북마크를 작성하세요.
      </p>
      <Mark />
    </div>
  );
}
