import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeaderboardComp from '../components/LeaderBoardComp';
import { useDispatch } from 'react-redux';

const Leaderboard = () => {
  return (
    <>
     <Header />
     <LeaderboardComp />
     <Footer />
    </>
  );
};

export default Leaderboard;
