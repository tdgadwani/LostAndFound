import React from "react";
import FoundItem from "../assets/FoundHomepage.svg";
import LostItem from "../assets/LostHomepage.svg";
import Header from '../components/Header.jsx'
import { useState } from "react";
import { Link } from "react-router-dom";
import HomeLeaderBoardSVG from '../assets/Home_LeaderBoard.svg'
import HomeShareCard from '../assets/Home_share.svg'
import HomeFollow from '../assets/Home_follow.svg'
import ItemCard from "../components/ItemCard.jsx";
import Slider from "../components/Slider.jsx"
import Footer from '../components/Footer.jsx';




const Home = ({ userName }) => {

  const array = [1,2,3,4,5,6,7,8,9]
  return (
    <>
    <Header className="fixed"/>
    <div className='ml-20 mt-20'>
        <div className='text-9xl'>
            HI <span className='text-kaddu-400'>{userName}</span>
        </div>
        <div className="text-8xl my-9">what's your plan for today?</div>

        <div className="flex justify-evenly">
          <div>
            <Link to="/additem" state={{isLost: true}}>
              <img src={LostItem} alt="" />
            </Link>
          </div>
          <div>
            <Link to="/additem" state={{isLost: false}}>
              <img src={FoundItem} alt="" />
            </Link>
          </div>
        </div>

        <div className="">
            <Slider autoSlide={true}>
                {array.map((i, index) => (
                    <div key={i} className=''>
                        <ItemCard/>
                    </div>
                ))}
            </Slider>
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
  );
};

export default Home;
