'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react';

export default function Modal({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const overlay = useRef(null); // Dom에 접근하고 싶
  const wrapper = useRef(null); // Dom에 접근하고 싶
  const router = useRouter();

  // 창이 닫혔을 때
  // useCallback : 함수를 저장
  const onDismiss = useCallback(() => {
    router.back(); // history.back() 뒤로가기
  }, [router]);

  // MouseEventHandler : 클릭, 드래그, 스와이프
  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10'
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className={
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6 bg-white ' +
          className
        }
      >
        {children}
      </div>
    </div>
  );
}
