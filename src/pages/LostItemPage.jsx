import { useState ,useEffect} from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import AllItemsComponent from "../components/LostItem.jsx";

const AllItems = ({itemType}) => {
    

    return (
        <>
           <Header />
           <AllItemsComponent itemType={itemType} />
           <Footer />
        </>
    )
};

export default AllItems;