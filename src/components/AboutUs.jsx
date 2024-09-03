import React from 'react'
import Header from './Header'
// import Ravi from '../assets/RaviProfile.jpg'
import Ravi from '../assets/AvtarProfile.png'
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
        <Header />
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 bg-foundify-gradient min-h-screen'>
            <div className='text-center font-bold text-3xl sm:text-4xl text-white'>
                Meet Our Foundify Team
            </div>
            <div className='flex flex-wrap justify-center mt-10'>
                
                {/* First Profile Card */}
                <div className='p-1 w-full sm:w-1/2 lg:w-60 bg-white shadow-2xl rounded-lg mx-4 mb-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-32 sm:h-40 w-32 sm:w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile" />
                    </div>
                    <div className='flex justify-center my-2 text-black'>
                        <h1 className='font-bold text-xl sm:text-2xl my-3'>Ravi Saini</h1>
                    </div>
                    <div className='text-center text-black text-sm sm:text-base'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis, autem ea.
                    </div>
                    <div className='font-bold my-2 flex justify-center text-sm sm:text-base'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-2 mt-2'>
                        <div className='mx-1 text-lg sm:text-xl'><FaLinkedinIn /></div>
                        <div className='mx-1 text-lg sm:text-xl'><GrInstagram /></div> 
                        <div className='mx-1 text-lg sm:text-xl'><FaTwitter /></div>   
                    </div>
                </div>

                {/* Second Profile Card */}
                <div className='p-1 w-full sm:w-1/2 lg:w-60 bg-white shadow-2xl rounded-lg mx-4 mb-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-32 sm:h-40 w-32 sm:w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile" />
                    </div>
                    <div className='flex justify-center my-2 text-black'>
                        <h1 className='font-bold text-xl sm:text-2xl my-3'>Ravi Saini</h1>
                    </div>
                    <div className='text-center text-black text-sm sm:text-base'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis, autem ea.
                    </div>
                    <div className='font-bold my-2 flex justify-center text-sm sm:text-base'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-2 mt-2'>
                        <div className='mx-1 text-lg sm:text-xl'><FaLinkedinIn /></div>
                        <div className='mx-1 text-lg sm:text-xl'><GrInstagram /></div> 
                        <div className='mx-1 text-lg sm:text-xl'><FaTwitter /></div>   
                    </div>
                </div>

                {/* Third Profile Card */}
                <div className='p-1 w-full sm:w-1/2 lg:w-60 bg-white shadow-2xl rounded-lg mx-4 mb-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-32 sm:h-40 w-32 sm:w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile" />
                    </div>
                    <div className='flex justify-center my-2 text-black'>
                        <h1 className='font-bold text-xl sm:text-2xl my-3'>Ravi Saini</h1>
                    </div>
                    <div className='text-center text-black text-sm sm:text-base'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis, autem ea.
                    </div>
                    <div className='font-bold my-2 flex justify-center text-sm sm:text-base'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-2 mt-2'>
                        <div className='mx-1 text-lg sm:text-xl'><FaLinkedinIn /></div>
                        <div className='mx-1 text-lg sm:text-xl'><GrInstagram /></div> 
                        <div className='mx-1 text-lg sm:text-xl'><FaTwitter /></div>   
                    </div>
                </div>

                {/* Fourth Profile Card */}
                <div className='p-1 w-full sm:w-1/2 lg:w-60 bg-white shadow-2xl rounded-lg mx-4 mb-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-32 sm:h-40 w-32 sm:w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile" />
                    </div>
                    <div className='flex justify-center my-2 text-black'>
                        <h1 className='font-bold text-xl sm:text-2xl my-3'>Ravi Saini</h1>
                    </div>
                    <div className='text-center text-black text-sm sm:text-base'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis, autem ea.
                    </div>
                    <div className='font-bold my-2 flex justify-center text-sm sm:text-base'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-2 mt-2'>
                        <div className='mx-1 text-lg sm:text-xl'><FaLinkedinIn /></div>
                        <div className='mx-1 text-lg sm:text-xl'><GrInstagram /></div> 
                        <div className='mx-1 text-lg sm:text-xl'><FaTwitter /></div>   
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs
