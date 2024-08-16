import React from 'react'
import lostImage from "../assets/lostSample_1.png"
import LocationIcon from "../assets/location.svg"
import RightIcon from "../assets/RightIcon.svg"
import { IMG_CDN_URL } from "../constants.js"
import ItemDetailPopup from './ItemDetailPopup.jsx'


const Item = ({cloudinaryImageId,name,type,address,time}) => {

  const hours = 0;  //curr time - addTime
  

  return (
    <>
    <div className='h-60 w-60 bg-slate-200 m-2 p-2'>
        <div className='h-20 bg-red-500 rounded-lg m-2'>
             <img className='h-4 w-4  top-0 right-0' src={RightIcon} />
             <img src={ IMG_CDN_URL + cloudinaryImageId }></img>
        </div>
        <div className='m-2'>
            <div className='flex justify-between'>
                <h1>{name} </h1>
                <button className='bg-red-400 rounded-lg text-sm p-1'>{type}</button>
            </div>
            <div className='flex text-sm'>
                <p><img src={LocationIcon} alt="" className='h-6 w-6 ' /> {address} | {hours} Hr ago</p>
            </div>
        </div>
        
      </div>
     {isPopup &&  <ItemDetailPopup onClose={()=>setIsPopup(false)}/>}
    </>
  )
}

export default Item;