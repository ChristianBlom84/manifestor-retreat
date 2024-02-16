'use client';

import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import bedroomOne from '../images/bedroom-1.jpg.webp';
import bedroomTwo from '../images/bedroom-2-single-beds.jpg.webp';
import bedroomThree from '../images/bedroom-3-single-bed.jpg.webp';
import bedroomFour from '../images/bedroom-4-2-double-beds.jpg.webp';
import oceanView from '../images/ocean-view1.jpg.webp';
import venueOne from '../images/Venue1.jpg';
import venueTwo from '../images/Venue2.jpg';
import venueThree from '../images/Venue3.jpg';
import venueFour from '../images/Venue4.jpg';
import venueFive from '../images/Venue5.jpg';
import venueSix from '../images/Venue6.jpg';
import venueSeven from '../images/Venue7.jpg';
import venueEight from '../images/Venue8.jpg';
import venueNine from '../images/Venue9.jpg';
import venueTen from '../images/Venue10.jpg';
import venueEleven from '../images/Venue11.jpg';
import venueTwelve from '../images/Venue12.jpg';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null,
  );
  const modalRef = useRef<HTMLDivElement>(null);
  const images = [
    bedroomOne,
    bedroomTwo,
    bedroomThree,
    bedroomFour,
    oceanView,
    venueOne,
    venueTwo,
    venueThree,
    venueFour,
    venueFive,
    venueSix,
    venueSeven,
    venueEight,
    venueNine,
    venueTen,
    venueEleven,
    venueTwelve,
  ];

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
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-5 mb-5 2xl:max-w-screen-2xl">
      {images.map((image, index) => (
        <div
          className="md:max-h-36 lg:max-h-40 xl:max-h-48 2xl:max-h-60 overflow-hidden flex justify-center items-center"
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
          <div className="relative" ref={modalRef}>
            <span
              className="absolute top-2 right-2 text-white cursor-pointer text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <Image
              className="w-full h-auto"
              src={selectedImage}
              alt={`${selectedImage}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
