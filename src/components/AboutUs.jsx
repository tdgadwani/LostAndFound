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
            <div>
            <div className='flex flex-wrap justify-center mt-10'>
                
                {/* First Profile Card */}
                <div className='p-1 w-full sm:w-1/2 lg:w-60 bg-foundify-gradient shadow-white  shadow-sm rounded-lg mx-4 mb-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-32 sm:h-40 w-32 sm:w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile" />
                    </div>
                    <div className='flex justify-center my-2 text-black'>
                        <h1 className='font-bold text-xl sm:text-2xl my-3 text-gray-600'>Ravi Saini</h1>
                    </div>
                    <div className='text-center  text-sm sm:text-base text-gray-600'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis, autem ea.
                    </div>
                    <div className='font-extrabold my-2 flex justify-center text-sm sm:text-base text-gray-600'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-2 mt-2'>
                    <div className='flex justify-center mb-2 mt-2'>
                        <div className='mx-1 text-lg sm:text-xl'> <a href="https://www.google.com"><FaLinkedinIn className='text-gray-600' /></a></div>
                        <div className='mx-1 text-lg sm:text-xl'><a href="https://www.google.com"><GrInstagram  className='text-gray-600'/></a></div> 
                        <div className='mx-1 text-lg sm:text-xl'><a href="https://www.google.com"><FaTwitter  className='text-gray-600'/></a></div>   
                    </div>
                    </div>
                </div>

                {/* Second Profile Card */}
                <div className='p-1 w-full sm:w-1/2 lg:w-60 bg-foundify-gradient shadow-white  shadow-sm rounded-lg mx-4 mb-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-32 sm:h-40 w-32 sm:w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile" />
                    </div>
                    <div className='flex justify-center my-2 text-black'>
                        <h1 className='font-bold text-xl sm:text-2xl my-3 text-gray-600'>Ravi Saini</h1>
                    </div>
                    <div className='text-center  text-sm sm:text-base text-gray-600'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis, autem ea.
                    </div>
                    <div className='font-extrabold my-2 flex justify-center text-sm sm:text-base text-gray-600'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-2 mt-2'>
                    <div className='flex justify-center mb-2 mt-2'>
                        <div className='mx-1 text-lg sm:text-xl'> <a href="https://www.google.com"><FaLinkedinIn className='text-gray-600' /></a></div>
                        <div className='mx-1 text-lg sm:text-xl'><a href="https://www.google.com"><GrInstagram  className='text-gray-600'/></a></div> 
                        <div className='mx-1 text-lg sm:text-xl'><a href="https://www.google.com"><FaTwitter  className='text-gray-600'/></a></div>   
                    </div>
                    </div>
                </div>

                {/* Third Profile Card */}
                <div className='p-1 w-full sm:w-1/2 lg:w-60 bg-foundify-gradient shadow-white  shadow-sm rounded-lg mx-4 mb-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-32 sm:h-40 w-32 sm:w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile" />
                    </div>
                    <div className='flex justify-center my-2 text-black'>
                        <h1 className='font-bold text-xl sm:text-2xl my-3 text-gray-600'>Ravi Saini</h1>
                    </div>
                    <div className='text-center  text-sm sm:text-base text-gray-600'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis, autem ea.
                    </div>
                    <div className='font-extrabold my-2 flex justify-center text-sm sm:text-base text-gray-600'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-2 mt-2'>
                    <div className='flex justify-center mb-2 mt-2'>
                        <div className='mx-1 text-lg sm:text-xl'> <a href="https://www.google.com"><FaLinkedinIn className='text-gray-600' /></a></div>
                        <div className='mx-1 text-lg sm:text-xl'><a href="https://www.google.com"><GrInstagram  className='text-gray-600'/></a></div> 
                        <div className='mx-1 text-lg sm:text-xl'><a href="https://www.google.com"><FaTwitter  className='text-gray-600'/></a></div>   
                    </div>
                    </div>
                </div>

                {/* Fourth Profile Card */}
                <div className='p-1 w-full sm:w-1/2 lg:w-60 bg-foundify-gradient shadow-white  shadow-sm rounded-lg mx-4 mb-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-32 sm:h-40 w-32 sm:w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile" />
                    </div>
                    <div className='flex justify-center my-2 text-black'>
                        <h1 className='font-bold text-xl sm:text-2xl my-3 text-gray-600'>Ravi Saini</h1>
                    </div>
                    <div className='text-center  text-sm sm:text-base text-gray-600'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis, autem ea.
                    </div>
                    <div className='font-extrabold my-2 flex justify-center text-sm sm:text-base text-gray-600'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-2 mt-2'>
                    <div className='flex justify-center mb-2 mt-2'>
                        <div className='mx-1 text-lg sm:text-xl'> <a href="https://www.google.com"><FaLinkedinIn className='text-gray-600' /></a></div>
                        <div className='mx-1 text-lg sm:text-xl'><a href="https://www.google.com"><GrInstagram  className='text-gray-600'/></a></div> 
                        <div className='mx-1 text-lg sm:text-xl'><a href="https://www.google.com"><FaTwitter  className='text-gray-600'/></a></div>   
                    </div>
                    </div>
                </div>
                
            </div>
            
            <div className='text-bold text-white text-4xl mt-6 mb-4 flex justify-center'>Special Mention</div>
            <div className='bg-bg-foundify-gradient  '>
                    <div className='flex justify-center mt-2'>
                                <img src={Ravi} className="h-32 sm:h-40 w-32 sm:w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile" />
                    </div>
                    <div className=''>
                        <h1 className='flex justify-center text-gray-600 font-extrabold text-lg'>Kush Sharma</h1>
                        <p className='flex justify-center text-gray-600'>Thanks for helping in UI/UX designing</p>
                    </div>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs
