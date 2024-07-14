import React from 'react';
import Header from "../components/Header"
import Footer from '../components/Footer';
import AddItemComp from '../components/AddItemComp';
import { useLocation } from 'react-router-dom';


const AddItem = () => {
  const location = useLocation();
  const { isLost } = location.state || {};
  return (
    <>
    <div>
      <div className="fixed">
      <Header />
      </div>
        
        <AddItemComp isLost={isLost} />
        <Footer />

        </div>
    </>
  );
};

export default AddItem;

