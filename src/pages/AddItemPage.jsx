import React from 'react';
import Header from "../components/Header"
import Footer from '../components/Footer';
import AddItemComp from '../components/AddItemComp';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { ROUTES } from '../utils/constants';


const AddItem = () => {
  const { userData } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  if(userData.isProfileSet === false) {
    toast("Complete your Profile ",  {
      duration: 4000,
    });
    navigate(ROUTES.EDITPROFILE);
  }
  const location = useLocation();
  const { isLost } = location.state || {};
  return (
    <>
        <Header />
        <AddItemComp isLost={isLost} />
        <Footer />
    </>
  );
};

export default AddItem;

