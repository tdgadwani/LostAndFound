import React from 'react'
import star from "../assets/VectorLogo.svg"
import diccount from "../assets/discount.png"

import {Link} from "react-router-dom"
import { REWARDS } from '../utils/constants'
import { useSelector } from 'react-redux'




const RewardComp = () => {
  const { userData } = useSelector((store) => store.auth);
  const points = userData.coins;

  return (
    <>
      <div className="p-16 bg-foundify-gradient">
        <div className="mt-10">
          <div className=" font-bold text-5xl text-center text-white">
            Reawrds
          </div>
          <div className="m-2 flex place-content-center font-bold">
            <img src={star} className="p-1" />
            <p className="p-1 text-white"> Your Credit : {points}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center  text-white m-2">
          <div
            className=" w-60 sm:w-2/3  lg:w-1/3 h-80  m-2 p-0.5 rounded-xl shadow-md shadow-white "
            style={{
              backgroundImage: `url(${REWARDS[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" flex  p-1 text-black rounded-md w-16 text-sm ">
              <img src={star} className="size-5" />
              <p className="px-1 font-bold">5000</p>
            </div>
          </div>

          <div className="w-60 sm:w-2/3 lg:w-1/3 h-80 m-2 p-2 mb-8 ">
            <div
              className="bg-black h-1/2 rounded-xl pt-1 pl-1 shadow-md shadow-white"
              style={{
                backgroundImage: `url(${REWARDS[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className=" flex  p-1 text-black rounded-md w-16 text-sm ">
                <img src={star} className="size-5" />
                <p className="px-1 font-bold">1000</p>
              </div>
            </div>

            <div className="flex h-48">
              <div
                className="m-2 p-2 bg-black w-1/2 rounded-xl shadow-md shadow-white"
                style={{
                  backgroundImage: `url(${REWARDS[2]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className=" flex  p-1 text-black rounded-md w-16 text-sm ">
                  <img src={star} className="size-5" />
                  <p className="px-1 font-bold">2000</p>
                </div>
              </div>
              <div
                className="m-2 p-0.5 bg-black w-1/2 rounded-xl shadow-md shadow-white"
                style={{
                  backgroundImage: `url(${REWARDS[3]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className=" flex  p-1 text-black rounded-md w-16 text-sm ">
                  <img src={star} className="size-5" />
                  <p className="px-1 font-bold">3000</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-60 sm:w-2/3 lg:w-1/3 h-80 bg-black mt-6 lg:m-2 p-2 rounded-xl shadow-md shadow-white"
            style={{
              backgroundImage: `url(${REWARDS[4]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" flex  p-1 text-black rounded-md w-16 text-sm ">
              <img src={star} className="size-5" />
              <p className="px-1 font-bold">4000</p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default RewardComp ;