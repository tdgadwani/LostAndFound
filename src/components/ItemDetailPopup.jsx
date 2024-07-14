import React, { useState } from 'react';
import cross from '../assets/cross.svg';
import RollNoPopup from './RollNoPopup';
import Carousel from './Carousel.jsx';

const ItemDetailPopup = ({ onClose, item }) => {
    const [isRollNoPopUp, setIsRollNoPopUp] = useState(false);

    return (
        <>
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30'>
                <div className='relative bg-white p-4 md:p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-3/4 overflow-auto'>
                    <button onClick={onClose} className='absolute top-2 right-2'>
                        <img src={cross} alt="Close" className='w-6 h-6' />
                    </button>
                    <div className='flex flex-col md:flex-row justify-evenly items-center'>
                        <div className='flex flex-col items-center w-full md:w-1/2'>
                            <Carousel autoSlide={true}>
                                {item.media.map((d, index) => (
                                    <img key={index} src={d} alt={`Slide ${index}`} className='w-full h-full object-contain' />
                                ))}
                            </Carousel>
                            <div className='mt-4'>
                                <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={() => setIsRollNoPopUp(true)}>Claim</button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center w-full md:w-1/2 mt-4 md:mt-0 md:ml-4'>
                            <div className='text-lg font-bold mb-4 text-center'>Item Details</div>
                            <div className='bg-gray-100 p-3 mb-4 w-full break-words'>{item.itemName}</div>
                            <div className='my-4 w-full'>
                                <span className='font-semibold'>Location:</span>
                                <span className='bg-gray-100 p-3 w-full block break-words'>{item.address.buildingName} | {item.address.collegeName}</span>
                            </div>
                            <div className='my-4 w-full'>
                                <span className='font-semibold'>Category:</span>
                                <span className='bg-gray-100 p-3 w-full block break-words'>{item.category}</span>
                            </div>
                            <div className='bg-gray-100 p-3 w-full my-4 max-h-32 overflow-y-auto break-words'>{item.description}</div>
                        </div>
                    </div>
                </div>

            </div>
            
            {isRollNoPopUp && <RollNoPopup onClose={() => setIsRollNoPopUp(false)} />}
        </>
    );
}

export default ItemDetailPopup;
