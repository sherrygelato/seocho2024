import Modal from '../../../../../components/Modal';
import PhotoDetailPage from '../../../../photos/[photoId]/page';

export default function PhotoDetailInterceptorPage2({
  params: { photoId },
}: {
  params: { photoId: number };
}) {
  return (
    <>
      <Modal className='bg-red-100'>
        <h1 className='text-2xl'>
          <strong>INTERCEPTOR</strong>
        </h1>
        <PhotoDetailPage
          params={{
            photoId: photoId,
          }}
        />
      </Modal>
    </>
  );
}
