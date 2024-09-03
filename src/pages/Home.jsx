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
  
      <div className="pt-20 w-screen bg-foundify-gradient">
        <div className=" w-[95%] mx-auto">
          <div className="flex flex-col ravi">
            <div className="flex flex-row justify-between">
                <div>
                    <div>
                      <div className="text-xl md:text-3xl lg:text-5xl text-white">
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
                      <div className="mb-9 text-xl md:text-3xl lg:text-5xl  mt-1 text-white">
                        What's your plan for today?
                      </div>
                    </div>
                    
                  <div className="flex flex-col justify-center items-center md:flex-row mt-14 md:justify-normal ml-0">
                    <div className="mb-5 md:mb-0">
                      <Link to={ROUTES.ADDITEM} state={{ isLost: true }}>
                        <div className="shadow-sm shadow-white px-2 mx-2 w-96 h-48 rounded-lg">
                            <div className="flex justify-between">
                              <div></div>
                              <div className=" mr-2 mt-2"><IoIosShareAlt className="text-white h-8 w-8 " /></div>
                            </div>
                            <div className="flex justify-between ml-6 mr-4">
                                  <div className="text-white"><img src={LostHead} alt="Found Item" className="w-44 h-40" /></div>
                                  <div className="text-white"><img src={LostSvg} alt="Found Item" className=" h-40" /></div>
                            </div>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link to={ROUTES.ADDITEM} state={{ isLost: false }}>
                        <div className="shadow-sm shadow-white px-2 m-2 w-96 h-48 rounded-lg">
                              <div className="flex justify-between">
                                <div></div>
                                <div className=" mr-2 mt-2"><IoIosShareAlt className="text-white h-8 w-8 " /></div>
                              </div>
                              <div className="flex ml-2 mr-2">
                                    <div className="text-white"><img src={FoundHead} alt="Found Item" className="w-44 h-40" /></div>
                                    <div className="text-white"><img src={FoundSvg} alt="Found Item" className="  h-40" /></div>
                              </div>
                          </div>
                      </Link>
                    </div>
                  </div>
                </div>

              <div className="flex  w-auto ">
                    <div className=" flex flex-col">
                          <div className="mb-2  mr-4 bg-foundify-gradient shadow-sm shadow-white w-96 h-40 p-4 rounded-lg">
                                <Link to={ROUTES.LEADERBOARD}>
                                
                                      <div className="flex pl-4 pr-4 pt-6 ">
                                          <div className="flex "><MdLeaderboard className="h-24 w-20 mx-6 flex justify-center text-white"/></div>
                                          <img
                                              src={LeaderboardSVG}
                                              alt="Found Item"
                                              className=" w-40 m-3 text-white"
                                            />
                                      </div>
                                 
                                </Link>
                          </div>
                          <div
                            className="bg-foundify-gradient shadow-sm shadow-white cursor-pointer w-96 h-44 mt-4 mb-2 p-4 text-black font-extrabold  rounded-lg  "
                            onClick={handleShare}
                          >
                            <div className="flex justify-between ">
                                <div className="text-2xl font-extrabold text-white">
                                    Share With Your <br/> Friends
                                </div>
                                <div><IoIosShareAlt className="text-white h-8 w-8" /></div>
                            </div>
                            <div className="flex justify-around mt-8">
                                 <div ><BiLogoGmail className="h-7 w-7 text-white" /></div>
                                 <div><IoLogoWhatsapp className="h-7 w-7 text-white"/></div>
                                 <div><FaTwitter className="h-7 w-7 text-white"/></div>
                                 <div><FaLinkedinIn className="h-7 w-7 text-white"/></div>
                            </div>
                          </div>
                    </div>
                    <div className="bg-foundify-gradient shadow-sm shadow-white mb-4 w-48 text-black rounded-lg flex-col justify-center">
                         <div className="flex mx-4 my-8">
                               <div className="flex justify-center "><TfiAnnouncement className="h-10 w-10 mr-5 text-white" /></div>
                               <div className="">
                                    <div className="text-sm font-bold text-white">Lost & Found <br/>Cases</div>
                                    <div className="text-white">{appData.items}</div>
                               </div>
                          </div>
                          <div className="flex mx-4 my-16">
                               <div className="flex justify-center "><HiOutlineUserGroup  className="h-12 w-12 mr-5 text-white" /></div>
                               <div className="">
                                    <div className="text-sm font-bold text-white">Users </div>
                                    <div className="text-white">{appData.users}</div>
                               </div>
                          </div>
                          <div className="flex mx-4 my-8" >
                               <div className="flex justify-center "><VscFeedback className="h-12 w-12 mr-5 text-white" /></div>
                               <div className="">
                                    <div className="text-sm font-bold text-white">Feedback </div>
                                    <div className="text-white">{appData.claimedItems}</div>
                               </div>
                          </div>
                          
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
              <div className="flex flex-row  from-kaddu-1100 to-kaddu-600 rounded-xl w-full h-64 mt-10 text-5xl text-white justify-center p-2">
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


