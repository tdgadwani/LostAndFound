import React from 'react'
import HeaderShimmer from './HeaderShimmer'
import FooterShimmer from './FooterShimmer'

const ShimmerProfile = () => {
  return (
    <>

     <HeaderShimmer/>
     <div className='flex justify-center items-center mt-10'>
    <div className='bg-kaddu-123 w-1/3 h-16 '>
    </div> </div>

    <div className='flex justify-evenly m-20 mx-20'>
        <div className='bg-kaddu-123 w-1/5 h-96'></div>
        <div className='bg-kaddu-123 w-1/5 h-96'></div>
    </div>


    <FooterShimmer/>
    
    </>
  )
}

export default ShimmerProfile