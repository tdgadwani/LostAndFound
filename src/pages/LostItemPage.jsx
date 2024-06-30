import { useState ,useEffect} from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import LostItemComp from "../components/LostItem.jsx";

const LostItem = () => {
    

    return (
        <>
           <Header />
           <LostItemComp/>
           <Footer />
        </>
    )
};

export default LostItem;