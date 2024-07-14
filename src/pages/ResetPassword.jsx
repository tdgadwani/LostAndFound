import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loginUser } from "../services/operations/authAPI";
import BGImage from "../assets/SignIn_Page.svg";
import Logo from "../assets/LogoMain.svg";
import { Link } from "react-router-dom";
import ResetP from "../assets/ResetP.svg"
import { resetPassword } from "../services/operations/resetPasswordAPI";
import TogglePassword from "../components/TogglePassword";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const newpasswordRef = useRef("");
  const confirmpasswordRef = useRef("");
  const { token } = useParams();
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = {
      password: newpasswordRef.current.value,
      cpassword: confirmpasswordRef.current.value,
    };

    // console.log(newpasswordRef.current.value);
    // console.log(confirmpasswordRef.current.value);

    dispatch(resetPassword(formData,token,navigate));
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
      <div className="hidden md:block w-1/2"></div>
      <div className="w-full md:w-2/5 m-4 md:m-8 bg-white flex flex-col justify-evenly items-center rounded-3xl p-4 md:p-10">
        <img src={Logo} alt="Logo" />
        <div className="flex flex-col justify-evenly items-center w-full">
          <img src={ResetP} alt="Create Account" className="my-2" />
          <div className="px-4 my-4 text-center text-xl">{username}, your new password must be diffrent from your previous password</div>
          <form onSubmit={submitHandler} className="w-full">
            <div className="my-2 flex flex-col justify-evenly items-center w-full">

            <TogglePassword passwordRef={newpasswordRef} passwordType={"newPassword"} />
            <TogglePassword passwordRef={confirmpasswordRef}  passwordType={"confirmNewPassword"}/>

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
