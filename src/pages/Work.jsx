import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Work = () => {
  return (
    <div>
        <Header/>
        <div className='bg-foundify-gradient h-screen pt-24 '>
             <div className='flex justify-center'>
                <img src={"https://res.cloudinary.com/dlgrwtkck/image/upload/v1725486304/fugga62hlaestbsxkt8k.png"} />
             </div>
             <div className='text-2xl font-bold text-white flex justify-center pt-10 sm:pt-6 px-5  italic text-center'>
                Nothing is ever lost that cannot be found 
            </div>
            <div className='flex justify-center pt-10 '>
                <div className='font-bold text-gray-400  text-xl sm:text-lg flex justify-center  text-center w-2/3 '>
                Foundify is a portal for NIT Patna students to streamline lost and found item retrieval.
                Users can post and claim lost items, track returns, and engage through a reward system
                </div>
            </div>
        </div>
        <Footer className=""/>
    </div>
  )
}

export default Work;