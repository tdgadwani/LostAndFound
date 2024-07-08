import React, { useState } from 'react';
import { Link } from "react-router-dom";
import profile from "../assets/profileImage.png";
import DropDown from './dropdown';
import Logo from "../assets/LogoMain.svg"
import { useDispatch } from 'react-redux';
import { logoutUser } from '../services/operations/authAPI';

const Title = () => (
    <a href="/">
        <img className="m-1 h-7 w-48 md:w-auto" alt="logo" src={Logo} />
    </a>
);

const Header = () => {
    const [showList, setShowList] = useState(false);
    const renderList = () => {
        setShowList(!showList);

    }
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
      <div className="flex justify-between items-center shadow-2xl bg-white fixed top-0 left-0 right-0 py-2 px-4 md:px-6">
        <Title />
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-4 font-bold text-lg">
            <li>
              <Link
                to="/lostitems"
                className="hover:text-gray-600 text-sm md:text-lg"
              >
                Lost
              </Link>
            </li>
            <li>
              <Link
                to="/founditems"
                className="hover:text-gray-600 text-sm md:text-lg"
              >
                Found
              </Link>
            </li>
            <li>
              <Link
                to="/claaimeditems"
                className="hover:text-gray-600 text-sm md:text-lg"
              >
                Claimed
              </Link>
            </li>
            <li>
              <Link
                to="/rewards"
                className="hover:text-gray-600 text-sm md:text-lg"
              >
                Rewards
              </Link>
            </li>
          </ul>
          <div onClick={renderList}>
            <img
              src={profile}
              className="h-10 w-10 rounded-full"
              alt="profile"
            />
          </div>
          {/* <DropDown /> */}
          {showList && (
            <div className="bg-kaddu-800 absolute z-60 right-0 top-10 min-w-[170px] pt-2 border border-gray-900 rounded-md">
              <Link to="/profile" className="flex items-center px-4 py-2 gap-3 text-xs text-kaddu-90000 hover:text-white" >
                <div className="title">Your Profile</div>
              </Link>
              <Link to="/edit-profile" className="flex items-center px-4 py-2 gap-3 text-xs text-kaddu-900 hover:text-white" >
                <div className="title">Settings</div>
              </Link>
              <div className="flex items-center px-4 py-2  text-sm text-kaddu-1000 hover:text-kaddu-500">
                <div className="title" onClick={handleLogout}>Logout Profile</div>
              </div>
              {/* <div className="px-2 gap-3 text-xs text-slate-300 flex justify-center items-center border-t border-gray-700 mt-4 hover:text-white">
                <button className="p-3" >
                  {" "}
                  Sign Out
                </button>
              </div> */}
            </div>
          )}
        </div>
      </div>
    );
};

export default Header;
