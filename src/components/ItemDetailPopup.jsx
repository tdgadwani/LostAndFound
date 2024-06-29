import React from 'react';
import lostImage from '../assets/lostSample_1.png';
import cross from '../assets/cross.svg';

const ItemDetailPopup = ({ onClose }) => {
    const name = "white sonata watch";
    const location = "SAC staircase";
    const category = "Watch";
    const description = "found this white sonata watch, near SAC building, it is a women's watch, with roman digits in the dial";

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-3/4 overflow-auto'>
                <button onClick={onClose} className='absolute top-2 right-2'>
                    <img src={cross} alt="Close" className='w-6 h-6' />
                </button>
                <div className='flex justify-evenly items-center'>
                    <div className='flex flex-col items-center'>
                        <div>
                            <img src={lostImage} alt="Lost Item" className='w-48 h-auto' />
                        </div>
                        <div className='mt-4'>
                            <button className='bg-blue-500 text-white py-2 px-4 rounded'>Claim</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center w-1/2 ml-4'>
                        <div className='text-lg font-bold mb-4 text-center'>Item Details</div>
                        <div className='bg-gray-100 p-3 mb-4 w-full'>{name}</div>
                        <div className='my-4 w-full'>
                            <span className='font-semibold'>Location:</span> 
                            <span className='bg-gray-100 p-3 w-full'>{location}</span>
                        </div>
                        <div className='my-4 w-full'>
                            <span className='font-semibold'>Category:</span> 
                            <span className='bg-gray-100 p-3 w-full'>{category}</span>
                        </div>
                        <div className='bg-gray-100 p-3 w-full my-4 max-h-32 overflow-y-auto'>{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailPopup;
