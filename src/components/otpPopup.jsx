import React, { useState, useRef } from "react";
import cross from "../assets/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/operations/authAPI";
import { setSignupData, setUpdataSignupData } from "../slices/authSlice";

const OTPPopup = ({ onClose, email }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (index < 5 && otp[index]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const formData = useSelector((store) => store?.auth?.signupData);

  const handleSubmit = (e) => {
        e.preventDefault(); 
        const numberString = otp.join("");
        // const otpNumber = /^\d+$/.test(numberString) ? Number(numberString) : NaN;
        // dispatch(setUpdataSignupData(numberString));
        // dispatch(setSignupData({ ...formData, otp: numberString }));
        console.log(`Formdata ${formData} otp ${otp}`);
        dispatch(signupUser({...formData, otp: numberString}, navigate));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96 max-h-96 overflow-auto">
        <button onClick={onClose} className="absolute top-2 right-2">
          <img src={cross} alt="Close" className="w-6 h-6" />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Enter OTP</h2>
          <p className="text-gray-600">
            We have sent an OTP to your Email {email}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex space-x-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)} // Refs for each input element
                id={`otp-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyUp={(e) => handleKeyUp(e, index)}
                maxLength="1"
                className="text-center border border-gray-300 rounded py-2 px-4 w-12 text-xl focus:outline-none focus:border-blue-500"
              />
            ))}
          </div>
          <button
            type="button" // Use type="button" to prevent form submission
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-6 rounded font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPPopup;
