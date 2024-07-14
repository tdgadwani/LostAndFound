import React,{useEffect, useState} from 'react';
import lostImage from '../assets/lostSample_1.png';
import cross from '../assets/cross.svg';
import RollNoPopup from './RollNoPopup';

import Carousel from './Carousel.jsx';
import { useDispatch } from 'react-redux';

const ItemDetailPopup = ({ onClose ,item}) => {
    const [isrollNoPopUp, setIsRollNoPopUp] = useState(false)
    // const name = "white sonata watch";
    // const location = "SAC staircase";
    // const category = "Watch";
    // const description = "found this white sonata watch, near SAC building, it is a women's watch, with roman digits in the dial";
    // // const dispatch = useDispatch();
    // // useEffect(() => {
    // //     dispatch(get)
    // // },[]);
    const images = [lostImage,lostImage,lostImage];
    console.log("hello",item)
 


    return (
        <>
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-3/4 overflow-auto'>
                <button onClick={onClose} className='absolute top-2 right-2'>
                    <img src={cross} alt="Close" className='w-6 h-6' />
                </button>
                <div className='flex justify-evenly items-center'>
                    <div className='flex flex-col items-center w-52'>
                        <Carousel autoSlide={true} >
                        {
                        
                            item.media.map((d)=>(
                                    
                                    <img src={d} />
                            ))
                        }
                       
                        </Carousel >
                        <div className='mt-4'>
                            <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={()=> setIsRollNoPopUp(true)}>Claim</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center w-1/2 ml-4'>
                        <div className='text-lg font-bold mb-4 text-center'>Item Details</div>
                        <div className='bg-gray-100 p-3 mb-4 w-full'>{item.itemName}</div>
                        <div className='my-4 w-full'>
                            <span className='font-semibold'>Location:</span> 
                            <span className='bg-gray-100 p-3 w-full'>{item.address.buildingName} | {item.address.collegeName}</span>
                        </div>
                        <div className='my-4 w-full'>
                            <span className='font-semibold'>Category:</span> 
                            <span className='bg-gray-100 p-3 w-full'>{item.category}</span>
                        </div>
                        <div className='bg-gray-100 p-3 w-full my-4 max-h-32 overflow-y-auto'>{item.description}</div>
                    </div>
                </div>
            </div>
        </div>
        {isrollNoPopUp && <RollNoPopup id={item._id} onClose={()=> setIsRollNoPopUp(false)}/>}
        </>
    );
}

export default ItemDetailPopup;
