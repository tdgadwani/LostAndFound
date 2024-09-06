import React, { useMemo, useState } from "react";
import FoundItem from "../assets/FoundHomepage.svg";
import LostItem from "../assets/LostHomepage.svg";
import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
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
import { ROUTES } from "../utils/constants.js";
import FlowingText from "../components/FlowingText.jsx";
import LeaderboardSVG from "../assets/LeaderboardWhite.svg";
import { TfiAnnouncement } from "react-icons/tfi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { VscFeedback } from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosShareAlt, IoLogoWhatsapp } from "react-icons/io";
import { MdLeaderboard } from "react-icons/md";
import LostSvg from "../assets/LostSomethingSvg.svg"
import FoundSvg from "../assets/FoundSomethingSvg.svg"
import LostHead from "../assets/Lost SomethingHeading.svg"
import FoundHead from "../assets/Found SomethingHeading.svg"





import { appDetails } from "../services/operations/authAPI.js";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { NextArrow, PrevArrow } from "../components/Arrows.jsx";

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
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
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
  const appData = useSelector((store) => store?.auth?.appData) || {};
  const items = useSelector((store) => store?.lostItem?.items) || [];
  
  useEffect(() => {
    if(!lostItems || lostItems.length === 0){
      dispatch(getLostItems());
    }
    if(!foundItems || foundItems.length === 0){
      dispatch(getFoundItems());
    }
    if(!appData || Object.keys(appData).length === 0) {
      dispatch(appDetails());
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
  console.log("appDetails", appData)
  return (
    <>
      <Header className="fixed w-full " />
  
      <div className="pt-20 w-full bg-foundify-gradient">
        <div className=" w-[95%] mx-auto">
          <div className="flex flex-col ravi">


          <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
  {/* Left Section */}
  <div className="w-full md:w-1/2 mx-auto">
    <div>
      <div>
        <div className="text-2xl md:text-3xl lg:text-5xl text-white italic">
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
        <div className="mt-1 mb-9 text-2xl md:text-3xl lg:text-5xl text-white italic">
          What's your plan for today?
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start mt-10  mx-auto">
        <div className="mb-5 md:mb-0 md:mr-4">
          <Link to={ROUTES.ADDITEM} state={{ isLost: true }}>
            <div className="shadow-sm shadow-white p-2 w-full max-w-xs h-48 rounded-lg">
              <div className="flex justify-between">
                <div></div>
                <div className="mr-2 mt-2">
                  <IoIosShareAlt className="text-white h-6 w-6" />
                </div>
              </div>
              <div className="flex justify-between ml-6 mr-4">
                <img src={LostHead} alt="Found Item" className="w-40 h-36" />
                <img src={LostSvg} alt="Found Item" className="h-36" />
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-1">
          <Link to={ROUTES.ADDITEM} state={{ isLost: false }}>
            <div className="shadow-sm shadow-white p-2 w-full max-w-xs h-48 rounded-lg">
              <div className="flex justify-between">
                <div></div>
                <div className="mr-2 mt-2">
                  <IoIosShareAlt className="text-white h-6 w-6" />
                </div>
              </div>
              <div className="flex ml-2 mr-2">
                <img src={FoundHead} alt="Found Item" className="w-40 h-36" />
                <img src={FoundSvg} alt="Found Item" className="h-36" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 mt-10 md:mt-0 mx-auto">
    <div className="flex flex-col md:flex-row md:space-x-4 w-full">
      <div className="flex flex-col pr-0 md:pr-12">
        <div className="mb-4 bg-foundify-gradient shadow-sm shadow-white w-full max-w-lg h-40 p-2 rounded-lg">
          <Link to={ROUTES.LEADERBOARD}>
            <div className="flex">
              <div className="w-full"></div>
              <IoIosShareAlt className="text-white h-8 w-8" />
            </div>
            <div className="flex pl-4 pr-4 ">
              <MdLeaderboard className="h-20 w-20 mx-6 text-white" />
              <img
                src={LeaderboardSVG}
                alt="Found Item"
                className="w-32 m-3 text-white"
              />
            </div>
          </Link>
        </div>
        <div
          className="bg-foundify-gradient shadow-sm shadow-white cursor-pointer w-full max-w-lg h-44 mt-4 p-4 text-black font-extrabold rounded-lg"
          onClick={handleShare}
        >
          <div className="flex justify-between">
            <div className="text-lg md:text-2xl font-extrabold text-white">
              Share With Your <br /> Friends
            </div>
            <IoIosShareAlt className="text-white h-8 w-8" />
          </div>
          <div className="flex justify-around mt-6">
            <BiLogoGmail className="h-7 w-7 text-white" />
            <IoLogoWhatsapp className="h-7 w-7 text-white" />
            <FaTwitter className="h-7 w-7 text-white" />
            <FaLinkedinIn className="h-7 w-7 text-white" />
          </div>
        </div>
      </div>
    <div className="bg-foundify-gradient shadow-sm shadow-white w-full max-w-xs text-black rounded-lg p-4 flex flex-col justify-center mx-auto mt-8 md:mt-0">

        <div className="flex mb-8">
          <TfiAnnouncement className="h-10 w-10 mr-5 text-white" />
          <div>
            <div className="text-sm font-bold text-white">Lost  &  Found Cases</div>
            <div className="text-kaddu-400 font-bold text-2xl">{appData.items}</div>
          </div>
        </div>
        <div className="flex mb-8">
          <HiOutlineUserGroup className="h-12 w-12 mr-5 text-white" />
          <div>
            <div className="text-sm font-bold text-white">Users</div>
            <div className="text-kaddu-400 font-bold text-2xl">{appData.users}</div>
          </div>
        </div>
        <div className="flex">
          <VscFeedback className="h-12 w-12 mr-5 text-white" />
          <div>
            <div className="text-sm font-bold text-white">Feedback</div>
            <div className="text-kaddu-400 font-bold text-2xl">{appData.claimedItems}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



            <div className="flex flex-col justify-center items-center md:flex-row md:justify-normal ml-0 mt-16">
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
            <div className="border-white border-b-2 border-t-2 p-2">
              <FlowingText
                text={
                  "#Lost & Found #Lost & Found #Lost & Found #Lost & Found #Lost & Found"
                }
                isBold={false}
              />
            </div>
            <div className="border-white border-b-2 p-2 ">
              <FlowingText
                text={
                  "#Lost & Found #Lost & Found #Lost & Found #Lost & Found #Lost & Found"
                }
                isBold={true}
              />
            </div>
          </div>
          <div className="flex justify-center  mt-10 w-full">
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

          <div className="flex flex-col md:flex-row items-center justify-evenly pb-10">
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
              <div className="flex flex-col items-center from-kaddu-1100 to-kaddu-600 rounded-xl w-full h-auto mt-10 text-white justify-center p-2 lg:flex-row lg:h-64 lg:text-5xl">
                <div className="flex flex-col p-8 text-center font-sans lg:p-16 lg:text-left lg:text-5xl">
                  <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl">Reuniting you</div>
                  <div className="font-extrabold mt-2 text-3xl sm:mt-3 sm:text-4xl lg:mt-3 lg:text-5xl">with your belongings</div>
                </div>
                <div className="mt-6 lg:mt-0">
                  <img src={HandShake} className="w-48 h-32 sm:w-64 sm:h-40 lg:w-[491px] lg:h-[312px]" />
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