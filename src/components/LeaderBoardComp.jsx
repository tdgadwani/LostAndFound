import React, { useEffect, useState } from "react";
import Rank1 from "../assets/Rank1.svg";
import Rank2 from "../assets/Rank2.svg";
import Rank3 from "../assets/Rank3.svg";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderBoardData } from "../services/operations/authAPI";
import LeaderboardShimmer from "../Shimmer/LeaderboardShimmer";

const LeaderboardComp = ({leaderBoardData}) => {
  return (
    <>
      {leaderBoardData !== undefined && leaderBoardData?.length >= 3 ? (
        <div className="min-h-screen bg-foundify-gradient pt-20 pb-44">
          <h1 className="text-center text-white text-5xl font-bold mb-8">Leaderboard</h1>

          <div className="flex justify-center space-x-4 mb-8">
            <div className=" text-center shadow-2xl w-40 h-56 mt-12">
              <div className="bg-yellow-300 rounded-t-lg p-2">
                <div className="font-bold">Rank 2</div>
                <img
                  src={leaderBoardData[1]?.avatar}
                  className="w-20 h-20 mx-auto rounded-full my-2"
                />
              </div>
              <div className=" text-gray-600 shadow-sm shadow-white">
                <div className="text-base md:text-xl font-bold ">
                  {leaderBoardData[1]?.fullName}
                </div>
                <div className="text-sm">NIT Patna</div>
                <div className="text-red-500 font-bold ">
                  credits: {leaderBoardData[1]?.coins}
                </div>
              </div>
            </div>

            <div className="text-center shadow-2xl w-48 h-64">
              <div className="bg-yellow-300 rounded-t-lg p-2 ">
                <div className="font-bold text-2xl">
                  Rank 1
                </div>
                <img
                  src={leaderBoardData[0]?.avatar}
                  className="w-24 h-24 mx-auto rounded-full my-2"
                />
              </div>
              <div className="text-gray-600 shadow-sm shadow-white">
                <div className="text-base md:text-xl font-bold ">
                  {leaderBoardData[0]?.fullName}
                </div>
                <div className="text-sm">NIT Patna</div>
                <div className="text-red-500 font-bold ">
                  credits: {leaderBoardData[0]?.coins}
                </div>
              </div>
            </div>

            <div className=" text-center shadow-2xl w-40 h-56 mt-12">
              <div className="bg-yellow-300 rounded-t-lg p-2">
                <div className="font-bold">Rank 3</div>
                <img
                  src={leaderBoardData[2]?.avatar}
                  className="w-20 h-20 mx-auto rounded-full my-2"
                />
              </div>
              <div className=" text-gray-600 shadow-sm shadow-white">
                <div className="text-base md:text-xl font-bold ">
                  {leaderBoardData[2]?.fullName}
                </div>
                <div className="text-sm">NIT Patna</div>
                <div className="text-red-500 font-bold ">
                  credits: {leaderBoardData[2]?.coins}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[90%] md:w-[700px] mx-auto bg-white rounded-lg shadow-md ">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg">
              <thead className="bg-gray-400">
                <tr>
                  <th className="py-2 px-2 text-left text-sm">Rank</th>
                  <th className="py-2 px-2 text-left text-sm">Name</th>
                  <th className="py-2 px-2 text-left text-sm">Credits</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y border-collapse rounded-lg divide-gray-400">
                {leaderBoardData?.map((user, index) => (
                  <tr key={index}>
                    <td className="py-2 px-2 text-left text-sm items-center">
                      <span className="pr-2 hidden md:inline-block">Rank</span>
                      <span>{index + 1}</span>
                    </td>
                    <td className="py-2 px-2 text-left text-sm line-clamp-1 ">{user?.fullName}</td>
                    <td className="py-2 px-2 text-left text-sm text-red-500">
                      <span className="pr-2 hidden md:inline-block">credits: </span>
                      <span>{user?.coins}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
        // <LeaderboardShimmer/>
      )}
    </>
  );
};

export default LeaderboardComp;