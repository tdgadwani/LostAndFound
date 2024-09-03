import React from "react";
import ExtractDate from "../utils/ExtractDate";
import Coin from "../assets/coin.gif";

const NotificationMessage = ({ message, timestamp }) => {
  const time = ExtractDate(timestamp);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div>Unity Points</div>
        <div>{time}</div>
      </div>
      <div className="flex flex-row">
        <div>{message}</div>
        <div>
         <img src={Coin} className="ml-2 mt-1 h-[15px]" /></div>
      </div>
    </div>
  );
};

export default NotificationMessage;
