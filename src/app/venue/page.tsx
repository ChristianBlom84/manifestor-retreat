import Image from 'next/image';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <>
      <h1 className="mx-2 text-center">Venue</h1>

      <ImageGallery />
    </>
  );
}
