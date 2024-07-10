import React, { useState } from 'react';
import EditProfileComp from '../components/EditProfile';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EditProfile = () => {
  
  return (
    <>
      <Header />
      <EditProfileComp />
      <div className='fixed bottom-0 w-full'>

      <Footer/>
      </div>
    </>
  );
};

export default EditProfile;
