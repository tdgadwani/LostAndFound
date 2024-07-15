import React, { useEffect, useState } from "react";
import Rank1 from "../assets/Rank1.svg";
import Rank2 from "../assets/Rank2.svg";
import Rank3 from "../assets/Rank3.svg";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderBoardData } from "../services/operations/authAPI";

const LeaderboardComp = () => {
  const dispatch = useDispatch();
    const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    dispatch(getLeaderBoardData());
  }, [dispatch]);

  const leaderBoardData = useSelector((store) => store?.auth?.leaderBoardData);
  useEffect(() => {
    setLeaderboardData(leaderBoardData);
  },[leaderBoardData]);
  console.log("stfgd ", leaderboardData);
  return (
    <>
      {leaderboardData !== undefined && leaderboardData.length >= 3 ? (
        <div className="min-h-screen bg-gradient-to-b from-white to-orange-200 p-8 mt-16 pb-44">
          <h1 className="text-center text-5xl font-bold mb-8">Leaderboard</h1>

          <div className="flex justify-center space-x-4 mb-8">
            <div className=" text-center shadow-2xl w-40 h-56">
              <div className="bg-yellow-300 rounded-lg p-2">
                <div className="font-bold">Rank 2</div>
                <img
                  src={Rank2}
                  className="w-20 h-20 mx-auto rounded-full my-2"
                />
              </div>
              <div className=" text-black">
                <div className="text-xl font-bold">
                  {leaderboardData[1].name}
                </div>
                <div className="text-sm">NIT Patna</div>
                <div className="text-red-500 font-bold ">
                  credits: {leaderboardData[1].coins}
                </div>
              </div>
            </div>

            <div className="text-center shadow-2xl w-48 h-64">
              <div className="bg-yellow-300 rounded-lg p-2 ">
                <div className="font-bold text-2xl">
                  Rank {leaderboardData[0].rank}
                </div>
                <img
                  src={Rank1}
                  className="w-24 h-24 mx-auto rounded-full my-2"
                />
              </div>
              <div className="text-black">
                <div className="text-xl font-bold">
                  {leaderboardData[0].fullName}
                </div>
                <div className="text-sm">NIT Patna</div>
                <div className="text-red-500 font-bold ">
                  credits: {leaderboardData[0].coins}
                </div>
              </div>
            </div>

            <div className=" text-center shadow-2xl w-40 h-56">
              <div className="bg-yellow-300 rounded-lg p-2">
                <div className="font-bold">Rank 1</div>
                <img
                  src={Rank3}
                  className="w-20 h-20 mx-auto rounded-full my-2"
                />
              </div>
              <div className=" text-black">
                <div className="text-xl font-bold">
                  {leaderboardData[2].name}
                </div>
                <div className="text-sm">NIT Patna</div>
                <div className="text-red-500 font-bold ">
                  credits: {leaderboardData[2].coins}
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/5 mx-auto bg-white rounded-lg shadow-md ">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg">
              <thead className="bg-gray-400">
                <tr>
                  <th className="py-2 px-2 text-left text-sm">Rank</th>
                  <th className="py-2 px-2 text-left text-sm">Name</th>
                  <th className="py-2 px-2 text-left text-sm">Credits</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y border-collapse rounded-lg divide-gray-400">
                {leaderboardData.map((user, index) => (
                  <tr key={index}>
                    <td className="py-2 px-2 text-left text-sm">
                      Rank {index + 1}
                    </td>
                    <td className="py-2 px-2 text-left text-sm">{user.fullName}</td>
                    <td className="py-2 px-2 text-left text-sm text-red-500">
                      credits: {user.coins}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default LeaderboardComp;
