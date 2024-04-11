import React from 'react'
import imgLogo from "../assets/profilebg.svg";

const RetrievedItemCard = ({imgurls,title,date}) => {
  return (
    <div className="flex space-x-7 bg-pink-100">
      <div className="">
        {/* <img src={imgLogo} alt="Claimed Item Image" className="" /> */}
        <img src={imgurls} alt="Claimed Item Image" className="" />
      </div>
      <div className="pt-3 pb-3 m-0">
        <div className="text-green-500 text-lg pt-3">Claimed</div>
        <div className="pt-3">
            {/* Title */}
            {title}
        </div>
        <div className="pt-3">
          {/* <span>Date 11th April 2025</span> */}
          <span>{date}</span>
        </div>
      </div>
      <hr className="w-[80%] justify-items-center " />
    </div>
  );
}

export default RetrievedItemCard