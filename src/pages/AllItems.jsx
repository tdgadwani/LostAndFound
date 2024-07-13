import { useState ,useEffect} from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import AllItemsComponent from "../components/AllItemsComponent.jsx";

const AllItems = ({itemType}) => {
    

    return (
      <>
        <Header className="fixed w-full" />
        <AllItemsComponent itemType={itemType} />
        <Footer />
      </>
    );
};

export default AllItems;