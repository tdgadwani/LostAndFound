import React from 'react'
import lostImage from "../assets/lostSample_1.png"
import mapIcon from "../assets/Map_Icon.svg"
const Item = () => {
  return (
    <>
    <div className='flex justify-evenly items-center'>
        <div className='h-48 w-48'>
            <img src={lostImage}></img>
        </div>
        <div>
          <div>
            <h1>White Charger : IPhone
            </h1>
            </div>
            <div className='flex items-center justify-evenly'>
              <div>
          <img src={mapIcon} alt="" className='h-10 w-10 ' />
          </div>
          <div>
            Library, NIT Patna
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Item