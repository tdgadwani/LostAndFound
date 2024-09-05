import React from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

export const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      //   className="absolute top-1/2  transform -translate-y-1/2 z-10"
      className="text-0 leading-0 left-[-25px] absolute  top-1/2 block w-5 h-5 p-0 transform -translate-y-1/2 cursor-pointer text-transparent border-none outline-none bg-transparent"
    >
      <FiArrowLeftCircle className="text-4xl text-white cursor-pointer" />
    </div>
  );
};

export const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-0 right-[-25px] left-auto mr-8 leading-0 absolute top-1/2 block w-5 h-5 p-0 transform -translate-y-1/2 cursor-pointer text-transparent border-none outline-none bg-transparent"
    >
      <FiArrowRightCircle className="text-4xl text-white cursor-pointer" />
    </div>
  );
};
