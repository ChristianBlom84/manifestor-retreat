'use client';
import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import aerialView from '../images/AerialView.png';
import landscape from '../images/Landscape.png';
import food from '../images/Food.png';
import house from '../images/House.png';
import rooms from '../images/Rooms.png';
import outsideOne from '../images/Spot-outside-1.png';
import outsideTwo from '../images/Spot-outside-2.png';
import studio from '../images/Studio.png';
import view from '../images/View.png';

type GalleryProps = { galleryPics?: StaticImageData[] | undefined };

const ImageGallery: React.FC<GalleryProps> = ({ galleryPics }) => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null,
  );
  const modalRef = useRef<HTMLDivElement>(null);
  const defaultImages = [
    aerialView,
    landscape,
    food,
    house,
    rooms,
    outsideOne,
    outsideTwo,
    studio,
    view,
  ];

  const images =
    galleryPics && galleryPics.length > 0 ? galleryPics : defaultImages;

  const handleImageClick = (image: any) => {
    console.log(typeof image);
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
  };

  const handleCloseOutsideModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 mx-5 mb-5 2xl:max-w-screen-2xl">
      {images.map((image, index) => (
        <div
          className="flex justify-center items-center cursor-pointer"
          key={index}
          onClick={() => handleImageClick(image)}
        >
          <Image src={image} alt={`${selectedImage}`} />
        </div>
      ))}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-40"
          onClick={(e) => handleCloseOutsideModal(e)}
        >
          <div
            className="relative md:w-[70%] md:h-[80%] flex justify-center items-center"
            ref={modalRef}
          >
            <span
              className="absolute top-2 right-2 text-white cursor-pointer text-4xl"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <Image
              className="w-auto h-auto max-w-full max-h-full m-auto"
              src={selectedImage}
              alt={`${selectedImage}`}
              height={selectedImage.height}
              width={selectedImage.width}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
