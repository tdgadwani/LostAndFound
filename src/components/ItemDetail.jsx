import React from "react";
import LostItem from "../assets/lostSample_1.png";
import mapIcon from "../assets/Map_Icon.svg";
const ItemDetail = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-evenly fixed">
      <div className="basis-1/2">
        <img src={LostItem} alt="" className="h-full" />
      </div>
      <div className="flex items-center justify-between ">
        <div className="text-2xl">White Charger : IPhone</div>
        <div className="flex  items-center">
          <img src={mapIcon} alt="" className="h-14 w-14" />
          <div>Libray, NIT Patna</div>
        </div>
      </div>
      <div className="w-1/2">
        <label htmlFor="" className="text-2xl">Description :</label>
        <div className="text-xl">
          Education: B-Tech from Tier-1 Years of Experience: 2.5+ years Prior
          Experience: SDE 2 in a MNC Date of the Offer: April 2024 Company: Uber
          Title/Level: Software Engineer - 2 Location: Bangalore Base salary: 42
          Lakhs INR...
        </div>
      </div>
      <div>
        <button className="bg-kaddu-400 rounded-full w-32 h-8">Claim</button>
      </div>
    </div>
  );
};

export default ItemDetail;
