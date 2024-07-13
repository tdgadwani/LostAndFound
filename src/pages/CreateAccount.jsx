import React, { useState, useRef } from "react";
import BGImage from "../assets/SignIn_Page.svg";
import CreateAcc from "../assets/Create_Account.svg";
import googleLogo from "../assets/googleLogin.svg";
import appleLogo from "../assets/appleLogin.svg";
import { sendOTP } from "../services/operations/authAPI.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import OTPPopup from "../components/otpPopup.jsx";
import LogoMain from "../assets/LogoMain.svg";
import Header from "../components/Header.jsx";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const CreateAccount = () => {
  const [showOTPWindow, setShowOTPWindow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const fullnameRef = useRef("");

  const [typetext, setTypetext] = useState('password');

  const handleToggle = () => {
    if (typetext==='password'){
      setTypetext('text')
    } else {
      setTypetext('password')
    }
 }
  
  // const validate = () => {
  //   const errors = {};
  //   if (formData.username.length < 3) {
  //     errors.username = 'Username must be at least 3 characters long.';
  //   }
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailPattern.test(formData.email)) {
  //     errors.email = 'Please enter a valid email address.';
  //   }
  //   return errors;
  // };

  const submitHandler = async (e) => {
    e.preventDefault();

    // const errors = validate();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      fullName: fullnameRef.current.value,
    };
    dispatch(sendOTP(formData, navigate));
    setShowOTPWindow(true);
    
    // Clear input fields after submission
    emailRef.current.value = "";
    passwordRef.current.value = "";
    fullnameRef.current.value = "";
  };
  
  return (
    <>
      <div
        className="bg-kaddu-500 flex h-screen justify-between"
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hidden md:block w-1/2"></div>
        <div className="w-full md:w-2/5 m-4 md:m-8 bg-white flex flex-col justify-evenly items-center rounded-3xl p-4 md:p-10">
          <img src={LogoMain} alt="Logo" className="w-32 md:w-48 lg:w-64" />
          <div className="flex flex-col justify-evenly items-center w-full">
            <div className="my-2">
              <img src={CreateAcc} alt="Create Account"  className="my-2 w-3/4 md:w-auto"/>
            </div>
            <form onSubmit={submitHandler} className="w-full ">
              <div className="my-2 flex flex-col justify-evenly items-center w-full ">
                  <div className="w-full mt-8">
                    <input
                    type="text"
                    placeholder="Full Name"
                    ref={fullnameRef}
                  className="border-2 py-2 px-4 md:px-10 w-full"
                  required
                  />
                  </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Email"
                    ref={emailRef}
                    className="border-2 py-2 px-4 md:px-10 mt-2 w-full"
                    required
                  />
                </div>
               <div className="flex justify-center w-full  mb-8">
                <input
                    type={typetext}
                    placeholder="Password"
                    ref={passwordRef}
                    className="border-2 py-2 px-4 md:px-10 mt-2 w-full"
                    required
                  />
                  <div className="flex justify-center p-1 ">
                    <button className="btn btn-outline-primary" onClick={handleToggle}>
                      { typetext==="password"? <FaRegEye className="size-8"/> :<FaRegEyeSlash className="size-8"/> }
                      </button>
                  </div>
                </div>
                <button
                  className="bg-kaddu-500 p-3 w-full border-2 mt-2 font-bold text-xl"
                  onClick={submitHandler}
                >
                  Create Account
                </button>
              </div>
            </form>
            <div className="my-2 text-center">
              By creating an account, you agree to Relink{" "}
              <Link to="/terms" className="text-kaddu-600">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-kaddu-600">
                Privacy Policy
              </Link>
            </div>
            <div className="my-2 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-kaddu-600">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showOTPWindow && (
        <OTPPopup onClose={() => setShowOTPWindow(false)} email={emailRef.current.value} />
      )}
    </>
  );
};

export default CreateAccount;
