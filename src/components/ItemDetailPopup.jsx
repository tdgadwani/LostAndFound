import React, { useState } from 'react';
import cross from '../assets/cross.svg';
import RollNoPopup from './RollNoPopup';
import Carousel from './Carousel.jsx';

const ItemDetailPopup = ({ onClose, item }) => {
    const [isRollNoPopUp, setIsRollNoPopUp] = useState(false);
    return (
      <>
     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
  <div className="relative bg-gray-200 p-4 md:p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-full md:max-h-3/4 overflow-y-auto mt-60 md:mt-0 lg:-mt-0 xl:mt-0 mb-6 md:mb-0 lg:-mb-0 xl:mb-0">
    <button
      onClick={onClose}
      className="absolute top-2 right-2 border-2 border-black border-solid rounded-full p-2"
    >
      <img src={cross} alt="Close" className="w-4 h-4 " />
    </button>

    <div className="flex flex-col md:flex-row justify-evenly items-center">
      <div className="items-center">
        <div className="flex flex-col items-center w-full md:w-1/2 md:ml-12 ">
          <Carousel autoSlide={true}>
            {item.media.map((d, index) => (
              <img
                key={index}
                src={d}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain"
              />
            ))}
          </Carousel>
          {!item?.isLost && !item?.isRetrieved ? (
            <div className="mt-4 mb-2">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => setIsRollNoPopUp(true)}
              >
                Claim
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex-col">
          <div className="">
            <span className="font-bold">Contact Details:</span>
            <span className="bg-gray-400 p-3 rounded-r-2xl block">
              <span className="font-semibold">Name: </span>
              {item?.retrievedBy === undefined &&
              item?.retrievedBy?.fullName === undefined
                ? item?.userId?.fullName
                : item?.retrievedBy?.fullName}{" "}
              <br />
              <span className="font-semibold">Mob. No.: </span>
              {item?.retrievedBy === undefined &&
              item?.retrievedBy?.mobileNo === undefined
                ? item?.userId?.mobileNo
                : item?.retrievedBy?.mobileNo}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2 mt-4 md:mt-0 md:ml-4">
        <div className="font-bold mb-4 text-center text-2xl">Item Details</div>
        <div className="my-2 w-full break-words">
          <span className="font-semibold">Item Name:</span>
          <span className="bg-gray-400 rounded-r-2xl p-3 w-full block break-words">
            {item.itemName}
          </span>
        </div>
        <div className="my-2 w-full">
          <span className="font-semibold">Location:</span>
          <span className="bg-gray-400 rounded-r-2xl p-3 w-full block break-words">
            {item.address.buildingName} | {item.address.collegeName}
          </span>
        </div>
        <div className="my-2 w-full">
          <span className="font-semibold">Category:</span>
          <span className="bg-gray-400 rounded-r-2xl p-3 w-full block break-words">
            {item.category}
          </span>
        </div>
        <div className="my-2 w-full">
          <span className="font-semibold">Description:</span>
          <span className="bg-gray-400 rounded-r-2xl p-3 w-full block break-words">
            {item.description}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>


        {isRollNoPopUp && (
          <RollNoPopup id={item._id} onClose={() => setIsRollNoPopUp(false)} />
        )}
      </>
    );
}

export default ItemDetailPopup;