import React, { useMemo, useState } from "react";
import FoundItem from "../assets/FoundHomepage.svg";
import LostItem from "../assets/LostHomepage.svg";
import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import HomeLeaderBoardSVG from "../assets/Home_LeaderBoard.svg";
import HomeShareCard from "../assets/Home_share.svg";
import HomeFollow from "../assets/Home_follow.svg";
import HandShake from "../assets/HandShake.png";
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
import FlowingText from "../components/FlowingText.jsx";
import LostAndFoundBanner from "../components/LostAndFoundBanner.jsx";

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

const handleShare = async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        text: "Check out this page!",
        url: window.location.href,
      });
      console.log("Content shared successfully");
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  } catch (error) {
    console.error("Error sharing:", error);
  }
};

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
      <Header className="fixed w-full " />
  
      <div className="mt-20 w-screen">
        <div className=" w-[95%] mx-auto">
          <div className="flex flex-col ravi">
            <div className="flex flex-row justify-between">
                <div>
                    <div>
                      <div className="text-xl md:text-3xl lg:text-5xl">
                        Hi{" "}
                        <span className="text-kaddu-400">
                          {userData?.fullName
                            .split(" ")[0]
                            .replace(
                              /^./,
                              userData?.fullName.split(" ")[0][0].toUpperCase()
                            ) || "Email"}
                          ,
                        </span>
                      </div>
                      <div className="mb-9 text-xl md:text-3xl lg:text-5xl  mt-1">
                        What's your plan for today?
                      </div>
                    </div>
                    
                  <div className="flex flex-col justify-center items-center md:flex-row mt-14 md:justify-normal ml-0">
                    <div className="mb-5 md:mb-0">
                      <Link to={ROUTES.ADDITEM} state={{ isLost: true }}>
                        <img
                          src={LostItem}
                          alt="Lost Item"
                          className="w-full md:w-[350px]"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link to={ROUTES.ADDITEM} state={{ isLost: false }}>
                        <img
                          src={FoundItem}
                          alt="Found Item"
                          className="w-full md:w-[350px] ml-7"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

              <div className="flex flex-col w-2/5">
                <div className="mb-5 md:mb-0 md:w-[300px] ml-10  mr-10">
                  <Link to={ROUTES.LEADERBOARD}>
                    <img
                      src={HomeLeaderBoardSVG}
                      alt="Leaderboard"
                      className="w-full md:w-auto"
                    />
                    {/* <div
                      className="w-[300px] h-[186px] border-black border-2"
                    >
                              Leaderboard
                    </div> */}

                  </Link>
                </div>
                <div
                  className="bg-black cursor-pointer text-white font-extrabold text-2xl p-2 rounded-xl mb-5 md:mb-0 mt-5 w-[300px] h-[186px] ml-10"
                  onClick={handleShare}
                >
                  Share With Your Homies
                </div>
              </div>

            </div>
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-normal ml-0">
              {/* <div className="mb-5 md:mb-0">
              <Link to={ROUTES.ADDITEM} state={{ isLost: true }}>
                <img
                  src={LostItem}
                  alt="Lost Item"
                  className="w-full md:w-[350px]"
                />
              </Link>
            </div>
            <div>
              <Link to={ROUTES.ADDITEM} state={{ isLost: false }}>
                <img
                  src={FoundItem}
                  alt="Found Item"
                  className="w-full md:w-[350px] ml-7"
                />
              </Link>
            </div> */}
            </div>
          </div>
          <div className="mt-2">
            <div className="border-black border-b-2 border-t-2 p-2">
              <FlowingText
                text={
                  "#Lost & Found #Lost & Found #Lost & Found #Lost & Found #Lost & Found"
                }
                isBold={false}
              />
            </div>
            <div className="border-black border-b-2 p-2">
              <FlowingText
                text={
                  "#Lost & Found #Lost & Found #Lost & Found #Lost & Found #Lost & Found"
                }
                isBold={true}
              />
            </div>
          </div>
          <div className="flex justify-center bg-blue-gray-200/5 mt-10 w-full">
            <div className="relative w-[95%]">
              <Slider {...settings}>
                {combinedItems.map((item) => (
                  <div key={item._id} className="p-2 gap-1">
                    <ItemCard item={item} disabled={true} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-evenly my-20">
            {/* <div className="mb-5 md:mb-0">
              <Link to={ROUTES.LEADERBOARD}>
                <img
                  src={HomeLeaderBoardSVG}
                  alt="Leaderboard"
                  className="w-full md:w-auto"
                />
              </Link>
            </div> */}
            <div className="flex flex-col justify-between items-center">
              {/* <div className="mb-5 md:mb-0">
                <img
                  src={HomeShareCard}
                  alt="Share"
                  className="w-full md:w-auto"
                />
              </div> */}
              {/* <div>
                <img
                  src={HomeFollow}
                  alt="Follow"
                  className="w-full md:w-auto"
                />
              </div> */}
              <div className="flex flex-row bg-gradient-to-r from-kaddu-1100 to-kaddu-600 rounded-xl w-full h-[300px] text-5xl text-white justify-center p-2">
                <div className="flex flex-col p-16 font-sans">
                  <div className="font-extrabold ">Reuniting you </div>
                  <div className="font-extrabold mt-3">with your belongings</div>
                </div>
                <div>
                  <img src={HandShake} className="w-[491px] h-[312px]" />
                </div>
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