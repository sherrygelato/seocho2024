import ImageViewer from '../../../components/ImageViewer';
import { getPhotos } from '../../../lib/placeholder';

export default async function PhotoDetailPage({
  params: { photoId },
}: {
  params: { photoId: number };
}) {
  const photos = await getPhotos(1);
  const photo = photos[photoId - 1];
  return (
    <>
      <ImageViewer photo={photo} />
    </>
  );
}
