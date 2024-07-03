import Image from 'next/image';
import Link from 'next/link';
import { getPhotos } from '../../lib/placeholder';

export default async function PhotosPage() {
  const photos = await getPhotos(1);
  return (
    <>
      <h1 className='text-2xl'>
        Photos Page - 사진 목록 화면:: 사진 총 {photos.length}장
      </h1>
      <div className='grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 gap-4'>
        {photos.map((photo) => (
          <Link key={photo.id} href={`/photos/${photo.id}`}>
            <Image
              src={`${photo.thumbnailUrl}`}
              alt={photo.title}
              width={150}
              height={150}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
