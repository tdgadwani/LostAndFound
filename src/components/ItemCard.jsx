import React, { useState } from "react";
import lostImage from "../assets/lostSample_1.png";
import LocationIcon from "../assets/location.svg";
import RightIcon from "../assets/RightIcon.svg";
import { IMG_CDN_URL } from "../constants.js";
import ItemDetailPopup from "./ItemDetailPopup.jsx";
import ExtractDate from "../utils/ExtractDate.js";

// const Item = ({cloudinaryImageId,itemName,type,address,dateFound}) => {

const ItemCard = ({isLost, itemName, category, media, type="Lost", description, address, dateFound='2024-07-11T08:47:50.070+00:00'}) => {
    const [showItemDetailPopup, setShowItemDetailPopup] = useState(false);
    var color="red";
    if(type =="Found"){
        color = "blue"
    }
    if(type =="Claimed"){
        color = "green"
    }

    const time = ExtractDate(dateFound);
    return (
        <>
        <div
            className="h-72 w-64 bg-kaddu-123 m-2 p-2 border-2 rounded-xl z-0"
            
        >
            <div className="h-52 bg-red-500 rounded-lg p-2" onClick={() => setShowItemDetailPopup(true)}>
            <img className="h-8 w-8 relative top-0 right-0" src={RightIcon} />
            {/* <img src={ IMG_CDN_URL + cloudinaryImageId } /> */}
            </div>
            <div className="my-2 p-2">
            <div className="flex justify-between">
                <h1 className="font-bold text-black">{itemName} </h1>
                <div className={`bg-${color}-500 rounded-lg text-sm p-1 font-bold text-white`}>
                {type}
                </div>
            </div>

            <div className="flex  text-sm">
                <img src={LocationIcon} alt="" className="h-6 w-6 " />
                <p>
                {address} | {time}
                </p>
            </div>
            </div>
        </div>
        {showItemDetailPopup && (
            <ItemDetailPopup onClose={() => setShowItemDetailPopup(false)} />
        )}
        </>
    );
};

export default ItemCard;
