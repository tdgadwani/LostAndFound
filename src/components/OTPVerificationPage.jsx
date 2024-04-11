import React, { useState } from "react";
import OtpInput from "react-otp-input";

const OTPVerificationPage = ({ onVerifyOTP }) => {
  const [otp, setOTP] = useState("");

  const handleChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add OTP verification logic here
    onVerifyOTP(otp);
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto mt-10 p-6 bg-purple-400 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Enter OTP</h2>
        <p className="mb-4">
          Please enter the OTP sent to your registered email address:
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span> - </span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
