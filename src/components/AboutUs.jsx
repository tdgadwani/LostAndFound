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
        <div className='p-20 bg-black h-full'>
            <div className='text-center font-bold text-4xl text-white'>
                Meet Our Foundify Team
            </div>
            <div className='flex justify-center mt-10'>

                <div className='p-1 w-60  bg-blue-gray-200  shadow-2xl rounded-lg mx-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-40 w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile"  />
                    </div>
                    <div className='flex justify-center my-3'>
                        <h1 className=' font-bold text-2xl my-3'>Ravi Saini</h1>
                    </div>
                    <div className=' text-center'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis,  autem ea.
                    </div>
                    <div className='font-bold my-3 flex justify-center'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-4 mt-4'>
                        <div className='mx-2'><FaLinkedinIn /></div>
                        <div className='mx-2'><GrInstagram /></div> 
                        <div className='mx-2'><FaTwitter /></div>   
                    </div>
                </div>

                <div className='p-1 w-60  bg-blue-gray-200  shadow-2xl rounded-lg mx-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-40 w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile"  />
                    </div>
                    <div className='flex justify-center my-3'>
                        <h1 className=' font-bold text-2xl my-3'>Ravi Saini</h1>
                    </div>
                    <div className=' text-center'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis,  autem ea.
                    </div>
                    <div className='font-bold my-3 flex justify-center'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-4 mt-4'>
                        <div className='mx-2'><FaLinkedinIn /></div>
                        <div className='mx-2'><GrInstagram /></div> 
                        <div className='mx-2'><FaTwitter /></div>   
                    </div>
                </div>

                <div className='p-1 w-60  bg-blue-gray-200  shadow-2xl rounded-lg mx-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-40 w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile"  />
                    </div>
                    <div className='flex justify-center my-3'>
                        <h1 className=' font-bold text-2xl my-3'>Ravi Saini</h1>
                    </div>
                    <div className=' text-center'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis,  autem ea.
                    </div>
                    <div className='font-bold my-3 flex justify-center'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-4 mt-4'>
                        <div className='mx-2'><FaLinkedinIn /></div>
                        <div className='mx-2'><GrInstagram /></div> 
                        <div className='mx-2'><FaTwitter /></div>   
                    </div>
                </div>

                <div className='p-1 w-60  bg-blue-gray-200  shadow-2xl rounded-lg mx-4'>
                    <div className='flex justify-center mt-2'>
                        <img src={Ravi} className="h-40 w-40 rounded-full cursor-pointer border-black border-solid border-4" alt="profile"  />
                    </div>
                    <div className='flex justify-center my-3'>
                        <h1 className=' font-bold text-2xl my-3'>Ravi Saini</h1>
                    </div>
                    <div className=' text-center'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias fugiat reiciendis natus veritatis sit in ia officiis,  autem ea.
                    </div>
                    <div className='font-bold my-3 flex justify-center'>
                        Web Developer
                    </div>
                    <div className='flex justify-center mb-4 mt-4'>
                        <div className='mx-2'><FaLinkedinIn className=''/></div>
                        <div className='mx-2'><GrInstagram /></div> 
                        <div className='mx-2'><FaTwitter /></div>   
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs