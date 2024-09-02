import React, { useState } from "react";
import lostImage from "../assets/lostSample_1.png";
import LocationIcon from "../assets/location.svg";
import RightIcon from "../assets/RightIcon.svg";
import { IMG_CDN_URL } from "../constants.js";
import ItemDetailPopup from "./ItemDetailPopup.jsx";
import ExtractDate from "../utils/ExtractDate.js";

// const Item = ({cloudinaryImageId,itemName,type,address,dateFound}) => {

const ItemCard = ({item}) => {
    console.log("tgadwasZz", item);
    
    const [showItemDetailPopup, setShowItemDetailPopup] = useState(false);
    var color="red";
    var type = "Lost";
    if(item?.isRetrieved){
        type="Claimed";
        color ="green"
    }
    else if(!item?.isLost){
        type="Found";
        color="blue"
    }
   

    const time = ExtractDate(item?.dateFound);
    return (
        <>
        <div
            className="h-72 w-56 bg-kaddu-123 mx-10 my-7  p-3 border-2 rounded-xl "
            onClick={() => setShowItemDetailPopup(true)}
        >
            
            <div className="h-52 flex flex-col justify-center bg-black rounded-lg p-1" >
            {/* <img className="h-8 w-8 relative top-0 right-0" src={RightIcon} /> */}
            {/* <img src={ IMG_CDN_URL + cloudinaryImageId } /> */}
                <div className=" w-full h-full overflow-hidden object-cover ">
                    {(item && item?.media)?(
                        <img src={item?.media[0]} alt="" className="w-full h-full rounded-lg"/>
                    ):
                    
                    (<div></div>)
                    }

                </div>
            
            </div>
                <div className="my-2 ">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-black mt-1 ml-2">{item?.itemName || "Item"} </h1>
                            <div className="flex text-sm w-full">
                                <img src={LocationIcon} alt="" className="h-6 w-6 p-1 " />
                                {
                                    (item && item?.address && item?.address.buildingName)?(
                                        <p className="text-xs">
                                        {item?.address.buildingName} | {time}
                                        
                                        </p>
                                    ):(
                                        <p>hh</p>
                                        
                                    )
                                }
                            
                            
                            </div>
                        </div>
                        
                        <div className={`bg-${color}-500 rounded-lg text-sm p-1 font-bold text-white h-7`}>
                        {type}
                        </div>
                    </div>

           
            </div>
        </div>
        {showItemDetailPopup && (
            <ItemDetailPopup onClose={() => setShowItemDetailPopup(false)} item={item}  />
        )}
        </>
    );
};

export default ItemCard;