import React from 'react';
import lostImage from '../assets/lostSample_1.png';
// import { Carousel, IconButton } from "@material-tailwind/react";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Carousel from './Carousel.jsx';

const ItemList = () => {
  const images = [lostImage, lostImage, lostImage, lostImage, lostImage];

  return (
    <div className=' flex justify-center items-center h-screen bg-black'>
      <div className="w-52">
        {/* <Carousel >
          {images.map((d, index) => (
            <div key={index} className="flex justify-center">
              <img src={d} alt={`Lost item ${index + 1}`} className="w-48 h-auto object-cover" />
            </div>
          ))}
        </Carousel> */}
        <Carousel autoSlide={true} >
          {images.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ItemList;
