import React, { useState } from "react";
import lostImage from "../assets/lostSample_1.png";
import LocationIcon from "../assets/location.svg";
import RightIcon from "../assets/RightIcon.svg";
import { IMG_CDN_URL } from "../constants.js";
import ItemDetailPopup from "./ItemDetailPopup.jsx";

// const Item = ({cloudinaryImageId,itemName,type,address,dateFound}) => {

const ItemCard = ({isLost, itemName, category, media, description, address, dateFound}) => {
    const [showItemDetailPopup, setShowItemDetailPopup] = useState(false);
    const type = "lost"
    const hours =11

    return (
        <>
        <div
            className="h-72 w-64 bg-kaddu-800 m-2 p-2 border-2 rounded-xl z-0"
            onClick={() => setShowItemDetailPopup(true)}
        >
            <div className="h-44 bg-red-500 rounded-lg p-2">
            <img className="h-8 w-8 relative top-0 right-0" src={RightIcon} />
            {/* <img src={ IMG_CDN_URL + cloudinaryImageId } /> */}
            </div>
            <div className="my-2 p-2">
            <div className="flex justify-between">
                <h1 className="font-bold text-black">{itemName} </h1>
                <button className="bg-red-500 rounded-lg text-sm p-1 font-bold text-white">
                {type}
                </button>
            </div>

            <div className="flex  text-sm">
                <img src={LocationIcon} alt="" className="h-6 w-6 " />
                <p>
                {address} | {hours} Hr ago
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
