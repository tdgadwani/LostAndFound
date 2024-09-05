import React, { useState } from 'react';
import cross from '../assets/cross.svg';
import RollNoPopup from './RollNoPopup';
import Carousel from './Carousel.jsx';

const ItemDetailPopup = ({ onClose, item }) => {
    const [isRollNoPopUp, setIsRollNoPopUp] = useState(false);
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-2 sm:p-4">
          <div className="relative bg-gray-200 p-4 md:p-6 rounded-lg shadow-lg w-full sm:w-11/12 md:w-3/4 lg:w-1/2 max-h-3/4 overflow-auto mt-8 sm:mt-12"> 
            {/* Added margin-top */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 border-2 border-black border-solid rounded-full p-2"
            >
              <img src={cross} alt="Close" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="flex flex-col md:flex-row justify-evenly items-center">
              <div className="items-center w-full">
                <div className="flex flex-col items-center w-full md:w-1/2 md:ml-12">
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
                        className="bg-blue-500 text-white py-2 px-4 rounded text-sm sm:text-base"
                        onClick={() => setIsRollNoPopUp(true)}
                      >
                        Claim
                      </button>
                    </div>
                  ) : null}
                </div>
                <div className="mt-4 md:mt-0 w-full">
                  <div className="p-2">
                    <span className="font-bold">Contact Details:</span>
                    <span className="bg-gray-400 p-2 sm:p-2 rounded-r-2xl block">
                      <span className="font-semibold">Name: </span>
                      {item?.retrievedBy === undefined &&
                      item?.retrievedBy?.fullName === undefined
                        ? item?.userId?.fullName
                        : item?.retrievedBy?.fullName}
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
              <div className="flex flex-col justify-center w-full md:w-1/2 mt-2 md:mt-0 md:ml-4">
                <div className="font-bold mb-2 text-center text-2xl sm:text-xl">
                  Item Details
                </div>
                <div className="my-2 w-full">
                  <span className="font-semibold">Item Name:</span>
                  <span className="bg-gray-400 rounded-r-2xl p-2 sm:p-3 w-full block">
                    {item.itemName}
                  </span>
                </div>
                <div className="my-2 w-full">
                  <span className="font-semibold">Location:</span>
                  <span className="bg-gray-400 rounded-r-2xl p-2 sm:p-3 w-full block">
                    {item.address.buildingName} | {item.address.collegeName}
                  </span>
                </div>
                <div className="my-2 w-full">
                  <span className="font-semibold">Category:</span>
                  <span className="bg-gray-400 rounded-r-2xl p-2 sm:p-3 w-full block">
                    {item.category}
                  </span>
                </div>
                <div className="my-2 w-full">
                  <span className="font-semibold">Description:</span>
                  <span className="bg-gray-400 rounded-r-2xl p-2 sm:p-3 w-full block">
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
