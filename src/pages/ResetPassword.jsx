import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/operations/authAPI";
import BGImage from "../assets/SignIn_Page.svg";
import Logo from "../assets/LOGO.svg";
import { Link } from "react-router-dom";
import ResetP from "../assets/ResetP.svg"

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const newpasswordRef = useRef("");
  const confirmpasswordRef = useRef("");
  
  const submitHandler = async (e) => {
    e.preventDefault();
    // dispatch(
    //   setSignupData({
    //     email: emailRef.current.value,
    //     password: passwordRef.current.value,
    //   })
    // );
    // const formData = {
    //   email: emailRef.current.value,
    // };
    // email = emailRef.current.value;
    // dispatch(sendOTP(formData, navigate));
    // emailRef.current.value = "";
    // passwordRef.current.value = "";
    // setShowOTPWindow(true);
  };

  const username = "Ravi";

  return (
    <div
      className="bg-kaddu-500 flex h-screen justify-between"
      style={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-1/2"></div>
      <div className="w-2/5 m-8 bg-white flex flex-col justify-evenly items-center rounded-3xl">
        <img src={Logo} alt="Logo" />
        <div className="flex flex-col justify-evenly items-center">
          <img src={ResetP} alt="Create Account" className="my-2" />
          <div className="px-4 my-4 text-center text-xl">{username}, your new password must be diffrent from your previous password</div>
          <form onSubmit={submitHandler}>
            <div className="my-2 flex flex-col justify-evenly items-center">
                <input
                    type="text"
                    placeholder="new password"
                    ref={newpasswordRef}
                    className=" border-2 py-2 px-10 mt-2"
                    />
                <input
                  type="text"
                  placeholder="confirm password"
                  ref={confirmpasswordRef}
                  className=" border-2 py-2 px-10 mt-2"
                />
              <button
                type="submit"
                className="bg-kaddu-500 p-3 w-full border-2 mt-2 font-bold text-xl "
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
