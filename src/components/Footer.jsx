// import React from 'react';
// import { Link } from "react-router-dom";
// import arrow from "../assets/arrow.svg";
// import sideArrow from "../assets/sideArrow.svg";
// import { ROUTES } from '../utils/constants';
// import { FaLinkedinIn } from "react-icons/fa6";
// import { GrInstagram } from "react-icons/gr";
// import { FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="bg-black text-white py-6 px-6 bottom-0 left-0 right-0 h-40 border-white border-2">
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
//         <div>
//           <h2 className="text-lg font-bold mb-2">Get Updates</h2>
//           <div className="flex items-center mb-3">
//             <input 
//               type="text" 
//               placeholder="Email Address" 
//               className="bg-black border border-white p-2 text-base text-white w-full"
//             />
//             <button className="p-2">
//               <img src={sideArrow} alt="Subscribe" />
//             </button>
//           </div>
//           <div className="flex space-x-4">
//             <a href="#"><FaLinkedinIn /></a>
//             <a href="#"><GrInstagram /></a>
//             <a href="#"><FaTwitter /></a>
//           </div>
//         </div>
        
//         <div className="flex justify-around">
//           <div>
//             <ul className="space-y-3 font-bold text-base">
//               {/* <li><Link to="/">Services</Link></li> */}
//               <li><Link to={ROUTES.ABOUT}>About Team</Link></li>
//               <li><Link to="/">Work</Link></li>
//               {/* <li><Link to="/">Contact</Link></li> */}
//             </ul>
//           </div>
//           <div>
//             <ul className="space-y-3 font-bold text-base">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/">Lost & Found</Link></li>
//               {/* <li><Link to="/">Profile</Link></li> */}
//               {/* <li><Link to="/">Reward </Link></li> */}
//             </ul>
//           </div>
//         </div>

//         <div>
//           <ul className="space-y-3 font-bold text-base">
//             <li><Link to="/">Terms and Conditions</Link></li>
//             <li><Link to="/">Privacy Policy</Link></li>
//           </ul>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Footer;
import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import sideArrow from "../assets/sideArrow.svg";
import { ROUTES } from '../utils/constants';
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { subscribeUser } from '../services/operations/authAPI';

const Footer = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const subscribeHandler = () => {
    const email = emailRef.current.value;
    console.log("footer email", email);
    
    dispatch(subscribeUser({email}));
  };

  return (
    <div className="bg-black text-white py-6 px-6 bottom-0 left-0 right-0 h-auto border-white border-2">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Subscribe Section */}
        <div className="mb-4 md:mb-0 md:mr-28">
          <h2 className="text-lg font-bold mb-2">Get Updates</h2>
          <div className="flex items-center mb-3">
            <input 
              type="text" 
              placeholder="Email Address" 
              ref={emailRef}
              className="bg-black border border-white p-2 text-base text-white w-full"
            />
            <button className="p-2" onClick={subscribeHandler}>
              <img src={sideArrow} alt="Subscribe" />
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><GrInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Links Section for larger screens */}
        <div className="hidden md:flex md:col-span-2 lg:col-span-2 lg:gap-12">
          <div className="flex-1">
            <ul className="space-y-3 font-bold text-base">
              <li><Link to={ROUTES.ABOUT}>About Team</Link></li>
              <li><Link to={ROUTES.WORK}>Work</Link></li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="space-y-3 font-bold text-base">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Lost & Found</Link></li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="space-y-3 font-bold text-base">
              <li><Link to="/">Terms and Conditions</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex flex-wrap space-y-2 text-sm font-bold text-center">
            <div className="w-full">
              <Link to={ROUTES.ABOUT}>About Team</Link> | <Link to="/">Work</Link> | <Link to="/">Home</Link>
            </div>
            <div className="w-full">
              <Link to="/">Lost & Found</Link> | <Link to="/">Terms and Conditions</Link> | <Link to="/">Privacy Policy</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
