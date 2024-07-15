import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profileImage.png";
import Logo from "../assets/LogoMain.svg";
import { useDispatch } from "react-redux";
import { logoutUser } from "../services/operations/authAPI";
import { ROUTES } from "../utils/constants";

const Title = () => (
  <Link to={ROUTES.HOME}>
    <img className="m-1 h-7 w-48 md:w-auto" alt="logo" src={Logo} />
  </Link>
);

const Header = () => {
  const [showList, setShowList] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <div className="relative">
          <img
            src={profile}
            className="h-10 w-10 rounded-full cursor-pointer"
            alt="profile"
            onClick={() => setShowList(!showList)}
          />
          {showList && (
            <div className="bg-kaddu-800 absolute z-60 right-0 top-10 min-w-[170px] pt-2 border border-gray-900 rounded-md">
              <Link
                to={ROUTES.YOURPROFILE}
                className="flex items-center px-4 py-2 gap-3 text-xs text-kaddu-900 hover:text-white"
              >
                <div className="title">Your Profile</div>
              </Link>
              <Link
                to={ROUTES.EDITPROFILE}
                className="flex items-center px-4 py-2 gap-3 text-xs text-kaddu-900 hover:text-white"
              >
                <div className="title">Settings</div>
              </Link>
              <div
                className="flex items-center px-4 py-2 text-sm text-kaddu-1000 hover:text-kaddu-500 cursor-pointer"
                onClick={handleLogout}
              >
                <div className="title">Logout Profile</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
