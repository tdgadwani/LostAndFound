import React from "react";
import FoundItem from "../assets/FoundHomepage.svg";
import LostItem from "../assets/LostHomepage.svg";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = ({ userName }) => {
  return (
    <>
      <Header />
      <div className="ml-20">
        <div className="text-9xl">
          HI <span className="text-kaddu-400">{userName}</span>
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
      </div>
    </>
  );
};

export default Home;
