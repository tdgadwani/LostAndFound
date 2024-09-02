import React from 'react';
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import sideArrow from "../assets/sideArrow.svg";
import { ROUTES } from '../utils/constants';

const Footer = () => {
  return (
    <div className="bg-black text-white py-16 px-6 bottom-0 left-0 right-0 h-80 border-white border-2">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div>
          <h2 className="text-lg font-bold mb-4">Get Updates</h2>
          <div className="flex items-center mb-4">
            <input 
              type="text" 
              placeholder="Email Address" 
              className="bg-black border border-white p-2 text-base text-white w-full"
            />
            <button className="p-2">
              <img src={sideArrow} alt="Subscribe" />
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#"><img src={twitter} className="h-6 w-6" alt="Twitter" /></a>
            <a href="#"><img src={instagram} className="h-6 w-6" alt="Instagram" /></a>
            <a href="#"><img src={facebook} className="h-6 w-6" alt="Facebook" /></a>
          </div>
        </div>
        
        <div className="flex justify-around">
          <div>
            <ul className="space-y-3 font-bold text-base">
              <li><Link to="/">Services</Link></li>
              <li><Link to={ROUTES.ABOUT}>About</Link></li>
              <li><Link to="/">Work</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 font-bold text-base">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Lost & Found</Link></li>
              <li><Link to="/">Profile</Link></li>
              <li><Link to="/">Reward </Link></li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="space-y-3 font-bold text-base">
            <li><Link to="/">Terms and Conditions</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="fixed bottom-6 right-6">
        <button className="p-2 rounded-full bg-gray-800">
          <img src={arrow} alt="Scroll to top" className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
