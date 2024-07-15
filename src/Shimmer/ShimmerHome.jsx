import React from 'react'
import HeaderShimmer from "../Shimmer/HeaderShimmer.jsx"
import FooterShimmer from './FooterShimmer.jsx'

const ShimmerHome = () => {
  return (
    <>
    <HeaderShimmer/>

    <div className='mx-20 mt-10 mb-4 p-8 h-12 w-2/3 flex justify-center bg-kaddu-123'></div>
    <div className='mx-20 my-4 p-8 h-12 w-4/5 flex justify-center items-center bg-kaddu-123'></div>

    <div className='m-20 flex items-center justify-center'>
        <div className='bg-kaddu-123 w-1/3 h-80 my-5 mx-10'></div>
        <div className='bg-kaddu-123 w-1/3 h-80 my-5 mx-10'></div>
    </div>

    <div className='bg-kaddu-123 h-10 mx-4 my-2 p-5'></div>
    <div className='bg-kaddu-123 h-10 mx-4 my-2 p-5'></div>



    <div className='m-20 flex justify-between'>

    <div>
    <div className='bg-kaddu-123 h-60 w-60 rounded-xl'></div>
    <div className='bg-kaddu-123 h-4 w-44 mt-8 rounded-xl'></div>
    <div className='bg-kaddu-123 h-4 w-48 mt-3 rounded-xl'></div>
    </div>
    <div>
    <div className='bg-kaddu-123 h-60 w-60 rounded-xl'></div>
    <div className='bg-kaddu-123 h-4 w-44 mt-8 rounded-xl'></div>
    <div className='bg-kaddu-123 h-4 w-48 mt-3 rounded-xl'></div>
    </div>
    <div>
    <div className='bg-kaddu-123 h-60 w-60 rounded-xl'></div>
    <div className='bg-kaddu-123 h-4 w-44 mt-8 rounded-xl'></div>
    <div className='bg-kaddu-123 h-4 w-48 mt-3 rounded-xl'></div>
    </div>
    <div>
    <div className='bg-kaddu-123 h-60 w-60 rounded-xl'></div>
    <div className='bg-kaddu-123 h-4 w-44 mt-8 rounded-xl'></div>
    <div className='bg-kaddu-123 h-4 w-48 mt-3 rounded-xl'></div>
    </div>
    </div>


    <div className='m-20 flex text-center'>

    <div className='w-1/2 h-96 bg-kaddu-123 m-10'></div>
    <div className='w-1/2 flex flex-col items-center m-10'>
        <div className='bg-kaddu-123 w-80 m-2 h-2/3'></div>
        <div className="bg-kaddu-123 w-80 m-2 h-10"></div>
        <div className='bg-kaddu-123 w-56 m-2 h-10'></div>
    </div>
    </div>

    <div className='m-20 bg-kaddu-123 h-96'></div>
    
   <FooterShimmer/>

    </>
  )
}

export default ShimmerHome