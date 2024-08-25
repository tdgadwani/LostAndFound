import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeaderboardComp from '../components/LeaderBoardComp';
import { useDispatch, useSelector } from 'react-redux';
import { getLeaderBoardData } from '../services/operations/authAPI';
import LeaderboardShimmer from '../Shimmer/LeaderboardShimmer';

const Leaderboard = () => {
  const dispatch = useDispatch();
    const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    const timer= setTimeout(()=>{
      dispatch(getLeaderBoardData());
    },300)
    return ()=>clearTimeout(timer);
  }, [dispatch]);
  const isLoading = useSelector((store)=>store?.auth?.leaderBoardLoading)
  const leaderBoardData = useSelector((store) => store?.auth?.leaderBoardData);
  useEffect(() => {
    if(leaderBoardData){
      setLeaderboardData(leaderBoardData);
    }
  },[leaderBoardData]);
  return (
    <>
     <Header />
     {isLoading ? ( <LeaderboardShimmer/>):
     <LeaderboardComp  leaderBoardData={leaderBoardData}/>
     }
     <Footer />
    </>
  );
};

export default Leaderboard;