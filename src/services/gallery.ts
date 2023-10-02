import { Gallery } from '@/types/gallery/models';

export async function getGalleryPhotos(): Promise<Gallery[]> {
  const res = await fetch('http://46.101.221.8/gallery', {
    next: { revalidate: 3600 },
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  if (!res.ok) {
    return [];
  }

  return res.json().then(data => data?.items);
}

const galleryService = {
  getGalleryPhotos
};

export default galleryService;
