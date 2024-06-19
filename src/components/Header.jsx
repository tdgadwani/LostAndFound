import React from 'react';
import caption from "../assets/caption.svg";
import { Link } from "react-router-dom";
import profile from "../assets/profileImage.png";

const Title = () => (
    <a href="/">
        <img className="m-1 h-6 w-40 md:w-auto" alt="logo" src={caption} />
    </a>
);

const HeaderL = () => {
    return (
        <div className="flex justify-between items-center shadow-2xl bg-white fixed top-0 left-0 right-0 py-2 px-4 md:px-6">
            <Title />
            <div className="flex items-center space-x-4">
                <ul className="hidden md:flex space-x-4 font-bold text-lg">
                    <li><Link to="/" className="hover:text-gray-600 text-sm md:text-lg">Lost</Link></li>
                    <li><Link to="/" className="hover:text-gray-600 text-sm md:text-lg">Found</Link></li>
                    <li><Link to="/" className="hover:text-gray-600 text-sm md:text-lg">Claimed</Link></li>
                    <li><Link to="/" className="hover:text-gray-600 text-sm md:text-lg">Rewards</Link></li>
                </ul>
                <div>
                    <img src={profile} className="h-10 w-10 rounded-full" alt="profile" />
                </div>
            </div>
        </div>
    );
};

export default HeaderL;
