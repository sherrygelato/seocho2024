import Image from 'next/image';
import { Photo } from '@/lib/placeholder';

export default function ImageViewer({ photo }: { photo: Photo }) {
  return (
    <div className='border-2 border-red-300 p-5 m-5'>
      <h1 className='text-2xl'>
        Photo ID: {photo.id}의 사진 목록 화면 입니다.
      </h1>
      <h1 className='text-xl text-center m-3'>Photo title: {photo.title}</h1>
      <Image src={`${photo.url}`} alt={photo.title} width={600} height={600} />
    </div>
  );
}
