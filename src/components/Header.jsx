import React from 'react'
import caption from "../assets/caption.svg"
import {Link} from "react-router-dom"
import profile from "../assets/profileImage.png"





const Title = ()=>(
    <a href="/">
       <img className=" m-2  " alt="logo" src={caption}></img>
    </a>
    );

 const HeaderL = ()=>{


        return(
          <div className="flex justify-between shadow-lg bg-pink-200  fixed top-0 left-0 right-0">
            <Title />
            <div className="p-2 flex">
               <ul className="flex font-bold">
               <Link to = "/">
                  <li className="px-2">Lost</li>
               </Link>
               <Link to = "/">
                  <li className="px-2">Found</li>
               </Link>
               <Link to = "/">
                  <li className="px-2">Claimed </li>
               </Link>
               <Link to = "/">
                  <li className="px-2">Rewards </li>
               </Link>             
               </ul>
               <div className='mx-3'><img src={profile}  className='h-8 w-8'/></div>
            </div>
            
           
          </div>
        );
      };

export default HeaderL;
