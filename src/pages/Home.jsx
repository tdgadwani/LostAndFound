import React from 'react'
import FoundItem from '../assets/FoundHomepage.svg';
import LostItem from '../assets/LostHomepage.svg'
import NavBar from '../components/NavBar';
import Header from '../components/Header.jsx'
import { useState } from 'react';
import HomeLeaderBoardSVG from '../assets/Home_LeaderBoard.svg'
import HomeShareCard from '../assets/Home_share.svg'
import HomeFollow from '../assets/Home_follow.svg'

import Footer from '../components/Footer.jsx';


// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const Home = ({ userName }) => {
  return (
    <>
    <Header className="fixed"/>
    <div className='ml-20 mt-20'>
        <div className='text-9xl'>
            HI <span className='text-kaddu-400'>{userName}</span>
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

        <div>
            SLIDER
        </div>
        <div className='flex items-center justify-evenly my-20'>
            <div>
                <img src={HomeLeaderBoardSVG} alt="" />
            </div>
            <div className='flex flex-col justify-between items-center'>
                <div><img src={HomeShareCard} alt="" /></div>
                <div><img src={HomeFollow} alt="" /></div>
            </div>
        </div>
    </div>
        <Footer/>
    </>
  )
}

export default Home