import React from 'react'
import FoundItem from '../assets/FoundHomepage.svg';
import LostItem from '../assets/LostHomepage.svg'
import NavBar from '../components/NavBar';
import { useState } from 'react';


const Home = () => {
    const[name,setName] = useState("Kush")
  return (
    <>
    <NavBar></NavBar>
    <div className='ml-20'>
        <div className='text-9xl'>
            HI <span className='text-kaddu-400'>{name}</span>
        </div>
        <div className='text-8xl my-9'>
            what's your plan for today?
        </div>

        <div className='flex justify-evenly'>
            <div>
                <img src={LostItem} alt="" />
            </div>
            <div>
                <img src={FoundItem} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home