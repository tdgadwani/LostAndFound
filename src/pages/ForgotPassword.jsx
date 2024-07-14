import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/operations/authAPI";
import BGImage from "../assets/SignIn_Page.svg";
import Logo from "../assets/LogoMain.svg";
import { Link } from "react-router-dom";
import ForgotPasswordIcon from "../assets/ForgotPassword.svg"
import { resetPasswordToken } from "../services/operations/resetPasswordAPI";
import { ROUTES } from "../utils/constants";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      email: emailRef.current.value,
    };
    dispatch(resetPasswordToken(formData, navigate));
  };

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
          <img src={ForgotPasswordIcon} alt="Create Account" className="my-2" />
          <div className="my-4 text-xl">Enetr the Email address you used to create account</div>
          <form onSubmit={submitHandler} className="w-full">
            <div className="my-2 flex flex-col justify-evenly items-center">
              <input
                type="text"
                placeholder="email"
                className="w-full bg-transparent border-2 border-gray-700 dark:border-gray-200 px-3 py-2 rounded-md"
                ref={emailRef}
                required
              />
              <button
                type="submit"
                className="bg-kaddu-500 p-3 w-full border-2 mt-6 font-bold text-xl "
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
        <div>
          Remember Password ? 
          <Link to={ROUTES.LOGIN}>
            <span className="text-kaddu-600"> Login </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
