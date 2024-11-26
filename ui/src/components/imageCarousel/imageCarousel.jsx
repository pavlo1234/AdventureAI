import React, { useState } from 'react';

import "./imageCarousel.sass";

const ImageCarousel = ({ images }) => {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the "Next" button click to show the next image
  const handleNext = () => {
    if (currentIndex < images?.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first image
    }
  };

  // Handle the "Previous" button click to show the previous image
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images?.length - 1); // Loop back to the last image
    }
  };

  return (
    <div className="card-details-images">
      <img
        src={images?.[currentIndex] || ''}
        alt={`recommendation-image-${currentIndex}`}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <div className="carousel-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
