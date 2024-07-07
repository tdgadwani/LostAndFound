import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer.jsx";
import ItemCard from "../components/ItemCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getLostItems } from "../services/operations/lostItemsAPI.js";
import { getFoundItems, getRetreivedItems } from "../services/operations/foundItemsAPI.js";

const AllItemsComponent = ({ itemType }) => {
    const [allItems, setAllItems] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (itemType === "Lost") {
            dispatch(getLostItems());
            setAllItems(useSelector((store) => store.lostItems.lostItems))
        } else if (itemType === "Found") {
            dispatch(getFoundItems());
            setAllItems(useSelector((store) => store.foundItems.foundItems));
        } else if (itemType === "Claimed") {
            dispatch(getRetreivedItems());
            setAllItems(useSelector((store) => store.claimedItems.claimedItems));
        }
    }, []);

    return (
        <div>
        <div>
            <h1>{itemType} Items</h1>
        </div>
        <div className="flex flex-wrap bg-pink-200">
            {allItems?.length === 0 ? (
            <Shimmer />
            ) : (
            allItems.map((item) => (
                <Link to={`/ItemInfo/${item._id}`} key={item._id}>
                <ItemCard {...item} />
                </Link>
            ))
            )}
        </div>
        </div>
    );
};

export default AllItemsComponent;
