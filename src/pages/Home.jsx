import React from "react";
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

const Home = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { userData } = useSelector((store) => store?.auth);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
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

  const lostItems = useSelector((store) => store?.lostItems?.lostItems) || [];
  const foundItems = useSelector((store) => store?.foundItems?.foundItems) || [];
  const items = useSelector((store) => store?.lostItems?.items) || [];

  useEffect(() => {
    dispatch(getLostItems());
    dispatch(getFoundItems());
  }, []);

  useEffect(() => {
    if (lostItems.length > 0) {
      const randomLostItems = getRandomElements(lostItems, lostItems.length);
      dispatch(setItems(randomLostItems));
    }
  }, [lostItems]);

  useEffect(() => {
    if (foundItems.length > 0) {
      const randomFoundItems = getRandomElements(foundItems, foundItems.length);
      dispatch(setItems(randomFoundItems));
    }
  }, [foundItems]);

  return (
    <>
      <Header className="fixed w-full" />
      <div className="ml-5 mt-20 md:ml-20">
        <div className="text-3xl md:text-6xl lg:text-9xl">
          HI{" "}
          <span className="text-kaddu-400">{userData?.email || "Email"}</span>
        </div>
        <div className="text-2xl md:text-5xl lg:text-8xl my-9">
          what's your plan for today?
        </div>

        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="mb-5 md:mb-0">
            <Link to="/additem" state={{ isLost: true }}>
              <img src={LostItem} alt="Lost Item" className="w-full md:w-auto" />
            </Link>
          </div>
          <div>
            <Link to="/additem" state={{ isLost: false }}>
              <img src={FoundItem} alt="Found Item" className="w-full md:w-auto" />
            </Link>
          </div>
        </div>

        <div className="relative mt-10">
          <Slider {...settings}>
            {array.map((i) => (
              <div key={i} className="p-2">
                <ItemCard />
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-evenly my-20">
          <div className="mb-5 md:mb-0">
            <img src={HomeLeaderBoardSVG} alt="Leaderboard" className="w-full md:w-auto" />
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="mb-5 md:mb-0">
              <img src={HomeShareCard} alt="Share" className="w-full md:w-auto" />
            </div>
            <div>
              <img src={HomeFollow} alt="Follow" className="w-full md:w-auto" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
