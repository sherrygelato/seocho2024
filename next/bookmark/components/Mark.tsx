'use client';

import { Mark as MarkType } from '@/lib/types';
import Image from 'next/image';
import { Button } from './ui/button';
import { useEffect, useReducer, useRef } from 'react';
import LabelTypeInput from './LabelTypeInput';

type Props = {
  mark: MarkType;
  saveMark: (m: MarkType) => void;
  removeMark: (m: MarkType) => void;
};

export default function Mark({ mark, saveMark, removeMark }: Props) {
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);
  const urlRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!mark || !urlRef.current || !titleRef.current || !descriptRef.current)
      return;

    if (isEditing) {
      urlRef.current.value = mark.url;
      titleRef.current.value = mark.title;
      descriptRef.current.value = mark.descript ?? '';
    }

    // if (isEditing && urlRef.current) {
    //   urlRef.current.value = mark.url;
    //   urlRef.current.focus();
    // }

    // if (isEditing && titleRef.current) {
    //   titleRef.current.value = mark.title;
    //   titleRef.current.focus();
    // }

    // if (isEditing && descriptRef.current) {
    //   descriptRef.current.value = mark.descript ?? '';
    //   descriptRef.current.focus();
    // }
  }, [isEditing]);

  const save = () => {
    const url = urlRef?.current?.value || '';
    const title = titleRef?.current?.value || '';
    const descript = descriptRef?.current?.value || '';
    saveMark({ ...mark, url, title, descript });
    toggleEditing();
  };

  return (
    <>
      {isEditing ? (
        <form>
          <h1>Mark({mark.title}을 수정합니다.)</h1>
          <LabelTypeInput
            id='url'
            label={'url'}
            value={mark.descript ?? ''}
            type={'text'}
            ref={urlRef}
          />
          <LabelTypeInput
            id='title'
            label={'title'}
            value={mark.title}
            type={'text'}
            ref={titleRef}
          />
          <LabelTypeInput
            id='descript'
            label={'descript'}
            value={mark.descript ?? ''}
            type={'text'}
            ref={descriptRef}
          />
          <div>
            <Button variant={'destructive'} onClick={() => removeMark(mark.id)}>
              Delete
            </Button>
            <Button variant={'secondary'} onClick={() => toggleEditing()}>
              cancel
            </Button>
            <Button onClick={() => save}>Save</Button>
          </div>
        </form>
      ) : (
        <div
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <div className='flex border-2 border-white p-1'>
            <div className='w-20 text-center'>
              {mark.image ? (
                <Image alt={mark.title} src={mark.url} width={30} height={30} />
              ) : (
                ''
              )}
            </div>
            <div>
              <h3 className='mb-3 text-2xl font-semibold'>
                {mark.title}{' '}
                <Button variant={'link'} onClick={() => toggleEditing()}>
                  <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                    +
                  </span>
                </Button>
              </h3>
              <p className='m-0 max-w-[30ch] text-sm opacity-50'>
                {mark.descript ? mark.descript : ''}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
