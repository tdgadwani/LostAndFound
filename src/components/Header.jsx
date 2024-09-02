import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profileImage.png";
import Logo from "../assets/LogoMain.svg";
import { useDispatch } from "react-redux";
import { logoutUser } from "../services/operations/authAPI";
import { ROUTES } from "../utils/constants";
import NotificationComp from "./NotificationComp";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Title = () => (
  <Link to={ROUTES.HOME}>
    <img className="m-1 h-7 w-48 md:w-auto" alt="logo" src={Logo} />
  </Link>
);

const Header = () => {
  const [showList, setShowList] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const showref=useRef(null);
  const buttonRef=useRef(null);

  useOnClickOutside(showref,buttonRef, () => setShowNotification(false));
  return (
    <div className="flex justify-between items-center border-b-2 fixed backdrop-blur-sm z-30 top-0 left-0 right-0 py-2 px-4 md:px-6 bg-white bg-opacity-30">
      <Title />
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden flex items-center text-black"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 font-bold text-lg md:items-center md:static absolute top-12 right-0 bg-white md:bg-transparent shadow-md md:shadow-none rounded-md md:rounded-none w-full md:w-auto`}
        >
          <li className="md:mt-0 mt-2">
            <Link
              to={ROUTES.LOSTITEMS}
              className="block px-4 py-2 md:p-0 hover:text-gray-600 text-sm md:text-lg"
            >
              Lost
            </Link>
          </li>
          <li className="md:mt-0 mt-2">
            <Link
              to={ROUTES.FOUNDITEMS}
              className="block px-4 py-2 md:p-0 hover:text-gray-600 text-sm md:text-lg"
            >
              Found
            </Link>
          </li>
          <li className="md:mt-0 mt-2">
            <Link
              to={ROUTES.CLAIMEDITEMS}
              className="block px-4 py-2 md:p-0 hover:text-gray-600 text-sm md:text-lg"
            >
              Claimed
            </Link>
          </li>
          <li className="md:mt-0 mt-2">
            <Link
              to={ROUTES.REWARDS}
              className="block px-4 py-2 md:p-0 hover:text-gray-600 text-sm md:text-lg"
            >
              Rewards
            </Link>
          </li>
        </ul>
        <div className="relative flex justify-center items-center gap-2">
          <div ref={buttonRef} onClick={()=>setShowNotification((prev)=>!prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 hover:cursor-pointer">
              <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
            </svg>
          </div>
          <img
            src={profile}
            className="h-10 w-10 rounded-full cursor-pointer"
            alt="profile"
            onClick={() => setShowList(!showList)}
          />
          {showList && (
            <div className="bg-kaddu-800 absolute z-60 right-0 top-12 min-w-[170px] pt-2 border border-gray-900 rounded-md">
              <Link
                to={ROUTES.YOURPROFILE}
                className="flex items-center px-4 py-2 gap-3 text-lg text-black font-bold hover:text-kaddu-700"
              >
                <div className="title">Your Profile</div>
              </Link>
              <Link
                to={ROUTES.EDITPROFILE}
                className="flex items-center px-4 py-2 gap-3 text-lg text-black font-bold hover:text-kaddu-700"
              >
                <div className="title">Edit Profile</div>
              </Link>
              <div
                className="flex items-center px-4 py-2 text-lg text-kaddu-1000 font-bold hover:text-kaddu-500 cursor-pointer"
                onClick={handleLogout}
              >
                <div className="title">Logout Profile</div>
              </div>
            </div>
          )}
          {showNotification && (
            <div className="bg-kaddu-800 w-[320px] h-[400px] md:w-[500px] md:h-[500px] absolute right-0 top-12" ref={showref}>
              <NotificationComp/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;