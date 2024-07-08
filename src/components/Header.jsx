import React from 'react';
import { Link } from "react-router-dom";
import profile from "../assets/profileImage.png";
import DropDown from './dropdown';
import Logo from "../assets/LogoMain.svg"

const Title = () => (
    <a href="/">
        <img className="m-1 h-7 w-48 md:w-auto" alt="logo" src={Logo} />
    </a>
);

const Header = () => {
    return (
        <div className="flex justify-between items-center shadow-2xl bg-white fixed z-30 top-0 left-0 right-0 py-2 px-4 md:px-6">
            <Title />
            <div className="flex items-center space-x-4">
                <ul className="hidden md:flex space-x-4 font-bold text-lg">
                    <li><Link to="/lostitems" className="hover:text-gray-600 text-sm md:text-lg">Lost</Link></li>
                    <li><Link to="/founditems" className="hover:text-gray-600 text-sm md:text-lg">Found</Link></li>
                    <li><Link to="/claaimeditems" className="hover:text-gray-600 text-sm md:text-lg">Claimed</Link></li>
                    <li><Link to="/rewards" className="hover:text-gray-600 text-sm md:text-lg">Rewards</Link></li>
                </ul>
                <DropDown />
                
            </div>
        </div>
    );
};

export default Header;
