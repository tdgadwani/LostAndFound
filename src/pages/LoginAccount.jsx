import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/operations/authAPI";
import BGImage from "../assets/SignIn_Page.svg";
import Logo from "../assets/LogoMain.svg";
import { Link } from "react-router-dom";
import LoginAct from "../assets/LoginAccount.svg";
import TogglePassword from "../components/TogglePassword";
import { ROUTES } from "../utils/constants";

const LoginAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(passwordRef.current.value);

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(loginUser(formData, navigate));
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
      <div className="hidden md:block w-1/2"></div>
      <div className="w-full md:w-2/5 m-4 md:m-8 bg-white flex flex-col justify-evenly items-center rounded-3xl p-4 md:p-10">
        <img src={Logo} alt="Logo" className="w-32 md:w-48 lg:w-64" />
        <div className="flex flex-col justify-evenly items-center w-full">
          <img src={LoginAct} alt="Create Account" className="my-2 w-3/4 md:w-auto" />
          <form onSubmit={submitHandler} className="w-full">
            <div className="my-2 flex flex-col justify-evenly items-center w-full">
              <input
                type="text"
                placeholder="email"
                className="w-full bg-transparent border-2 border-gray-700 dark:border-gray-200 px-3 py-2 rounded-md"
                ref={emailRef}
                required
              />

              <TogglePassword passwordRef={passwordRef} passwordType={"Password"}/>

              <button
                type="submit"
                className="bg-kaddu-500 p-3 w-full border-2 mt-2 font-bold text-xl"
              >
                Login
              </button>
            </div>
          </form>
          <div className="my-2">
            <Link to={ROUTES.RESETPASSWORD}>
              <span className="text-kaddu-600 font-bold">Forgot Password</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          Don't have an account? 
          <Link to={ROUTES.SIGNUP}>
            <span className="text-kaddu-600"> Create Now </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAccount;
