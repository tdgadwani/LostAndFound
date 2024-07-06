import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/operations/authAPI";
import BGImage from "../assets/SignIn_Page.svg";
import Logo from "../assets/LOGO.svg";
import { Link } from "react-router-dom";
import LoginAct from "../assets/LoginAccount.svg";

const LoginAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
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
      <div className="w-1/2"></div>
      <div className="w-2/5 m-8 bg-white flex flex-col justify-evenly items-center rounded-3xl">
        <img src={Logo} alt="Logo" />
        <div className="flex flex-col justify-evenly items-center">
          <img src={LoginAct} alt="Create Account" className="my-2" />
          <form onSubmit={submitHandler}>
            <div className="my-2 flex flex-col justify-evenly items-center">
              <input
                type="text"
                placeholder="email"
                className="border-2 py-2 px-10"
                ref={emailRef}
              />
              <input
                type="password"
                placeholder="password"
                className="border-2 py-2 px-10 mt-2"
                ref={passwordRef}
              />
              <button
                type="submit"
                className="bg-kaddu-500 p-3 w-full border-2 mt-2 font-bold text-xl"
              >
                Login
              </button>
            </div>
          </form>
            <div className="my-2">
              <Link to="/signup">
                <span className="text-kaddu-600 font-bold">Forgot Pawword  </span>
              </Link>
            </div>
        </div>
        <div>
          Don't have an account? 
          <Link to="/signup">
            <span className="text-kaddu-600"> Create Now </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAccount;
