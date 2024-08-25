import React, { useMemo, useState } from "react";
import FoundItem from "../assets/FoundHomepage.svg";
import LostItem from "../assets/LostHomepage.svg";
import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import HomeLeaderBoardSVG from "../assets/Home_LeaderBoard.svg";
import HomeShareCard from "../assets/Home_share.svg";
import HomeFollow from "../assets/Home_follow.svg";
import ItemCard from "../components/ItemCard.jsx";
import Footer from "../components/Footer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLostItems } from "../services/operations/lostItemsAPI.js";
import { getFoundItems } from "../services/operations/foundItemsAPI.js";
import { getRandomElements } from "../utils/utils.js";
import { setItems } from "../slices/lostItemSlice.js";
import { ROUTES } from "../utils/constants.js";

const Home = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { userData } = useSelector((store) => store?.auth);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const dispatch = useDispatch();

  const lostItems = useSelector((store) => store?.lostItem?.lostItems) || [];
  const foundItems = useSelector((store) => store?.foundItems?.foundItems) || [];
  const items = useSelector((store) => store?.lostItem?.items) || [];
  
  useEffect(() => {
    if(!lostItems){
      dispatch(getLostItems());
    }
    if(!foundItems){
      dispatch(getFoundItems());
    }
  }, []);
  const [combinedItems, setCombinedItems] = useState([]);
  const randomLostItems = useMemo(()=> getRandomElements(lostItems, lostItems.length)
  ,[lostItems,lostItems.length])      
  
  const randomFoundItems = useMemo(()=>getRandomElements(foundItems, foundItems.length),[foundItems,foundItems.length]);

  useEffect(() => {
    let addTwoArrays = [];

    if (lostItems.length > 0) {
      addTwoArrays = addTwoArrays.concat(randomLostItems);
    } else {
      addTwoArrays = addTwoArrays.concat(lostItems);
    }

    if (foundItems.length > 0) {
      addTwoArrays = addTwoArrays.concat(randomFoundItems);
    } else {
      addTwoArrays = addTwoArrays.concat(foundItems);
    }

    setCombinedItems(addTwoArrays);
  }, [lostItems, foundItems]);
  
  return (
    <>
      <Header className="fixed w-full" />
      <div className="mt-20 w-screen">
        <div className=" w-[95%] mx-auto ">

        <div className="text-3xl md:text-6xl lg:text-8xl">
          HI{" "}
          <span className="text-kaddu-400">{userData?.email || "Email"}</span>
        </div>
        <div className="text-2xl md:text-5xl lg:text-8xl my-9">
          what's your plan for today?
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly ">
          <div className="mb-5 md:mb-0">
            <Link to={ROUTES.ADDITEM} state={{ isLost: true }}>
              <img
                src={LostItem}
                alt="Lost Item"
                className="w-full md:w-auto"
              />
            </Link>
          </div>
          <div>
            <Link to={ROUTES.ADDITEM} state={{ isLost: false }}>
              <img
                src={FoundItem}
                alt="Found Item"
                className="w-full md:w-auto"
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-center bg-blue-gray-200/5 mt-10 w-full">
          <div className="relative w-[95%]">
            <Slider {...settings}>
              {combinedItems.map((i) => (
                <div key={i._id} className="p-2 gap-1">
                  <ItemCard item={i} />
                </div>
              ))}
            </Slider>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-evenly my-20">
          <div className="mb-5 md:mb-0">
            <Link to={ROUTES.LEADERBOARD}>
              <img
                src={HomeLeaderBoardSVG}
                alt="Leaderboard"
                className="w-full md:w-auto"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="mb-5 md:mb-0">
              <img
                src={HomeShareCard}
                alt="Share"
                className="w-full md:w-auto"
              />
            </div>
            <div>
              <img src={HomeFollow} alt="Follow" className="w-full md:w-auto" />
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;