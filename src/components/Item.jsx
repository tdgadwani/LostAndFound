import React from 'react'
import lostImage from "../assets/lostSample_1.png"
import ItemDetailPopup from './ItemDetailPopup'
import { useState } from 'react'

const Item = () => {
  const[isPopup, setIsPopup]= useState(false)
  return (
    <>
   
      <div className=' bg-kaddu-200  w-1/6 flex flex-col justify-center items-center' onClick ={()=>setIsPopup(true)}>
        <div className='bg-kaddu-600 w-56 h-56'>
          <img src={lostImage} alt="" />
        </div>
        <div className='flex justify-between items-center'>

          <div>
            White Sonata Watch
          </div>
          <div>
            Lost
          </div>
        </div>
        
      </div>
     {isPopup &&  <ItemDetailPopup onClose={()=>setIsPopup(false)}/>}
    </>
  )
}

export default Item