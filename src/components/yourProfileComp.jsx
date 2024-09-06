import React, { useEffect, useState } from "react";
import { AVATAR_URLS, RANKS } from "../utils/constants";
import outline from '../assets/pencil1.png';
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../services/operations/authAPI";

const YourProfileComp = () => {
    const { userData, items } = useSelector((store) => store?.auth);
    const [rank, setRank] = useState(0);
    const name = userData.fullName.split(" ")[0];
    const credit = userData.coins;
    console.log("yeasrdgfk ", items);
    const dispatch = useDispatch();
    const college_name = "NIT Patna";
    useEffect(() => {
        dispatch(getDetails());
        if(credit <  500) {
            setRank(0);
        } else if(credit < 1000) {
            setRank(1);
        } else {
            setRank(2);
        }
    }, []);
    return (
        <>
            <div className="flex flex-col items-center pb-10 bg-foundify-gradient pt-16">
                <div className="text-white text-6xl flex justify-center mt-10 mb-10">
                    Your Profile
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div className="text-center shadow-md w-full sm:w-48 h-auto sm:h-72 m-4">
                        <div className='bg-red-500 rounded-t-lg p-2 w-full sm:w-48 h-44 sm:h-52'>
                            <img
                                src={userData.avatar}
                                className="w-32 sm:w-40 h-auto mx-auto rounded-full my-1"
                                alt="Profile"
                            />
                        </div>
                        <div className='text-black bg-white h-24 p-3 rounded-b'>
                            <div className="text-lg sm:text-xl font-bold">{name}</div>
                            <div className="text-xs sm:text-sm">{college_name}</div>
                            <div className="text-red-500 font-bold text-sm sm:text-base">credits: {credit}</div>
                        </div>
                    </div>

                    <div className="text-center shadow-md w-full sm:w-48 h-auto sm:h-72 m-4">
                        <div className=' rounded-t-lg p-2 w-full sm:w-48 h-48 sm:h-52 ' style={{backgroundImage: `url(${RANKS[rank].badge})`, backgroundSize: "cover"}}>
                        </div>
                        <div className='text-black bg-white h-24 p-4 flex justify-center'>
                            <div className="text-xl sm:text-3xl font-bold">{RANKS[rank].rank}</div>
                        </div>
                    </div>
                    <div className="pl-4 shadow-md shadow-white w-full sm:w-48 h-auto sm:h-72 m-4 text-white">
                           <div className="text-lg font-bold mt-8">FoundItems : {items?.foundItems || 0}</div>
                           <div className="text-lg font-bold mt-10">LostItems : {items?.lostItems || 0}</div>
                           <div className="text-lg font-bold mt-10 mb-4">ClaimedItems : {items?.claimItems || 0}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default YourProfileComp;
