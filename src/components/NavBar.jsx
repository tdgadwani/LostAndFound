import React from 'react'
import { CgProfile } from "react-icons/cg";
import LOGO from "../assets/LOGO.svg"

const NavBar = () => {
  return (
    <div className='flex  border-2 justify-evenly items-center font-bold'>
      <div >LOST</div>
      <div>FOUND</div>
      <div>REDEEM</div>
      <div >
        <img src={LOGO} alt=""  className='h-20'/>
      </div>
      <div>RETREIVED</div>
      <div>NOTIFICATION</div>
      <div className='flex items-center'>
        <div>
            <CgProfile/>
        </div>
        <div className='mx-2'>
            PROFILE
        </div>
      </div>
    </div>
  );
}

export default NavBar