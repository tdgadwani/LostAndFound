import React from 'react'
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className='flex space-x-8 bg-pink-100'>
      <div>LOST</div>
      <div>FOUND</div>
      <div>REDEEM</div>
      <div>LOGO</div>
      <div>RETREIVED</div>
      <div>NOTIFICATION</div>
      <div className=''>
        <div>
            <CgProfile/>
        </div>
        <div>
            PROFILE
        </div>
      </div>
    </div>
  );
}

export default NavBar