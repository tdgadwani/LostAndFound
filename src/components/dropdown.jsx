import React from "react";
import profile from "../assets/profileImage.png";

import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";

const DropDown = () => {
  return (
    <TEDropdown className="flex justify-center">
      <TERipple rippleColor="light">
        <TEDropdownToggle
          tag="a"
          className="flex  items-center whitespace-nowrap pointer-events-auto cursor-pointer rounded bg-primary"
        >
          <img src={profile} className="h-10 w-10 rounded-full" alt="profile" />
          <span className="ml-2 [&>svg]:w-5 w-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu className="bg-pink-200 border-black border-2">
        <TEDropdownItem>
          <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent hover:bg-blue-gray-100 px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
           Your Profile
          </a>
        </TEDropdownItem>
        <TEDropdownItem>
          <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent  hover:bg-blue-gray-100 px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
            Settings
          </a>
        </TEDropdownItem>
        <TEDropdownItem>
          <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent hover:bg-blue-gray-100  px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600 text-red-500">
            Logout
          </a>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
  );
}

export default DropDown;