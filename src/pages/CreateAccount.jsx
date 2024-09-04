import React, { useState, useRef, useEffect } from "react";
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
import TogglePassword from "../components/TogglePassword.jsx";
import { PASSWORDERRORMESSAGE, ROUTES } from "../utils/constants.js";
import toast from "react-hot-toast";
import { setSignupData } from "../slices/authSlice.js";
import FLogo from "../assets/FLogo1.png";
import HandLogo from "../assets/HandLogo.png";

const CreateAccount = () => {
  const [showOTPWindow, setShowOTPWindow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const fullnameRef = useRef("");
  
  const [showError, setShowError] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    if(fullnameRef.current.value.trim() === ""){
      toast.error("Full Name is Required", {
        duration: 4000,
      })
    }
    const email = emailRef.current.value;
    const regex = new RegExp(/^[\w.-]+@[\w-]+\.[\w.]{2,}$/i);
    const result = regex.test(email);
    if(result === false) {
      toast.error("Please enter Valid Email address.", { duration: 4000});
      return;
    }
    if(passwordRef.current.value.length < 8) {
      setShowError(true);
      return;
    }
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      fullName: fullnameRef.current.value,
    }; 
    dispatch(setSignupData(formData))
    dispatch(sendOTP(formData, navigate));
    setShowOTPWindow(true);
    emailRef.current.value = "";
    passwordRef.current.value = "";
    fullnameRef.current.value = "";
  };
  
  return (
    <>
      <div
        className="bg-foundify-gradient flex min-h-screen justify-between"
        // style={{
        //   backgroundImage: `url(${BGImage})`,
        //   backgroundSize: "contain",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="hidden relative md:block w-1/2">
          <img
            src={FLogo}
            className=" mt-0 absolute h-full top[-500px] object-cover w-full"
          />
          <img
            src={HandLogo}
            className="absolute top-0 left-0 object-contain"
          />
        </div>
        <div className="w-full md:w-2/5 m-4 md:m-8 bg-white flex flex-col justify-evenly items-center rounded-3xl p-4 md:p-10 overflow-y-auto">
          <img src={LogoMain} alt="Logo" className="w-32 md:w-48 lg:w-64" />
          <div className="flex flex-col justify-evenly items-center w-full">
            <div className="my-2">
              <img
                src={CreateAcc}
                alt="Create Account"
                className="my-2 w-3/4 md:w-auto"
              />
            </div>
            <form onSubmit={submitHandler} className="w-full">
              <div className="my-2 flex flex-col justify-evenly items-center w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  ref={fullnameRef}
                  className="w-full bg-transparent border-2 border-gray-700 dark:border-gray-200 px-3 py-2 rounded-md mt-2 mb-2"
                  required
                />
                <input
                  type="text"
                  placeholder="Email"
                  ref={emailRef}
                  className="w-full bg-transparent border-2 border-gray-700 dark:border-gray-200 px-2 py-1 rounded-md mt-1 mb-1"
                  required
                />

                <TogglePassword
                  passwordRef={passwordRef}
                  passwordType={"Password "}
                />
                {showError && (
                  <span className="text-xs m-0">{PASSWORDERRORMESSAGE}</span>
                )}
                <button
                  className="bg-[#7D58FE] p-3 w-full border-2 mt-8 font-bold text-xl"
                  onClick={submitHandler}
                >
                  Create Account
                </button>
              </div>
            </form>
            <div className="my-1 text-center">
              By creating an account, you agree to Relink{" "}
              <Link to="/terms" className="text-[#7D58FE]">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-[#7D58FE]">
                Privacy Policy
              </Link>
            </div>
            <div className="my-1 text-center">
              Already have an account?{" "}
              <Link to={ROUTES.LOGIN} className="text-[#7D58FE]">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showOTPWindow && (
        <OTPPopup
          onClose={() => setShowOTPWindow(false)}
          email={emailRef.current.value}
        />
      )}
    </>
  );
};

export default CreateAccount;