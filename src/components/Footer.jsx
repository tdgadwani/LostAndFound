import React from 'react';
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import sideArrow from "../assets/sideArrow.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white py-2 px-2 fixed bottom-0 left-0 right-0">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        
       
        <div>
          <h2 className="text-md font-bold mb-1">Get Updates</h2>
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Email Address" 
              className="bg-black border border-white p-1 text-xs text-white w-full"
            />
            <button className="p-1">
              <img src={sideArrow} alt="Subscribe" />
            </button>
          </div>
          <div className="flex space-x-1 mt-1">
            <a href="#"><img src={twitter} className="h-5 w-5" alt="Twitter" /></a>
            <a href="#"><img src={instagram} className="h-5 w-5" alt="Instagram" /></a>
            <a href="#"><img src={facebook} className="h-5 w-5" alt="Facebook" /></a>
          </div>
        </div>
        
        
        <div className="flex justify-around">
          <div>
            <ul className="space-y-1 font-bold text-xs">
              <li><Link to="/">Services</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Work</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 font-bold text-xs">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Lost & Found</Link></li>
              <li><Link to="/">Profile</Link></li>
              <li><Link to="/">Reward</Link></li>
            </ul>
          </div>
        </div>

        
        <div>
          <ul className="space-y-1 font-bold text-xs">
            <li><Link to="/">Terms and Conditions</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      
      <div className="fixed bottom-2 right-2">
        <button className="p-1 rounded-full ">
          <img src={arrow} alt="Scroll to top" className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
