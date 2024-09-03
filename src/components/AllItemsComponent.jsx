import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import LostItemShimmer from "../Shimmer/LostItemShimmer.jsx"
import ItemCard from "./ItemCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getLostItems } from "../services/operations/lostItemsAPI.js";
import {
  getFoundItems,
  getRetreivedItems,
} from "../services/operations/foundItemsAPI.js";

const AllItemsComponent = ({itemType}) => {
  console.log("bitches ",itemType)
  const [allItems, setAllItems] = useState([]);
  const dispatch = useDispatch();
  const lostItems = useSelector((store) => store?.lostItem?.lostItems);  
  const foundItems = useSelector((store) => store?.foundItems?.foundItems);
  const claimedItems = useSelector((store) => store?.claimedItems?.claimedItems);

  useEffect(() => {
    if (itemType === "Lost") {
      dispatch(getLostItems());
    } else if (itemType === "Found") {
      dispatch(getFoundItems());
    } else if (itemType === "Claimed") {
      dispatch(getRetreivedItems());
    }
  }, [itemType, dispatch]);

  useEffect(() => {
    if (itemType === "Lost") {
      if (lostItems === undefined) {
        setAllItems([]);
      } else {
        console.log("lost ", lostItems);
        
        setAllItems(lostItems);
      }
    } else if (itemType === "Found") {
      if (foundItems === undefined) {
        setAllItems([]);
      } else {
        setAllItems(foundItems);
      }
    } else if (itemType === "Claimed") {
      if (claimedItems === undefined) {
        setAllItems([]);
      } else {
        console.log("claimed", claimedItems);
        setAllItems(claimedItems);
      }
    }
  }, [itemType, lostItems, foundItems, claimedItems]);

  console.log("tgadwani ", allItems);

  return (
    // <div className="flex flex-col min-h-screen pt-32 bg-gradient-to-r from-kaddu-100 via-transparent to-kaddu-100">
       <div className="flex flex-col min-h-screen pt-32 bg-foundify-gradient ">
      <h1 className="text-4xl md:text-6xl text-center text-white">{itemType} Items</h1>
      <div className="flex flex-wrap justify-center md:justify-normal pt-2 md:pt-20">
        {allItems?.length === 0 ? 
          <LostItemShimmer/>
         :
          (allItems?.map((item) => {
            return <ItemCard item={item} key={item._id} disabled={false} />
}))}
      </div>
    </div>
  );
};

export default AllItemsComponent;