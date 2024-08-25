
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddItemComp from "../components/AddItemComp";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { ROUTES } from "../utils/constants";

const AddItem = () => {
  const [profileSet, setProfileSet] = useState(false);
  const navigate = useNavigate();
  const { userData } = useSelector((store) => store.auth);

  useEffect(() => {
    if (userData.isProfileSet === false) {
      toast("Complete your Profile First", {
        duration: 4000,
      });
      setProfileSet(true);
    }
  }, [userData]);

  useEffect(() => {
    if (profileSet === true) {
      navigate(ROUTES.EDITPROFILE);
    }
  }, [profileSet, navigate]);

  const location = useLocation();
  const { isLost } = location.state || {};

  return (
    <>
    <div>
      <div className="fixed">
      <Header />
      </div>
      <AddItemComp isLost={isLost} />
      <Footer />
    </div>
    </>
  );
};

export default AddItem;
