import React, { useState } from 'react';
import cross from '../assets/cross.svg'; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../services/operations/authAPI';

const OTPPopup = ({ onClose, email }) => {
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    const handleKeyUp = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        } else if (index < 3 && otp[index]) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formData = useSelector((store) => store?.auth?.userData);

    const handleSubmit = () => {
        dispatch(signupUser(formData,navigate));
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative bg-white p-8 rounded-lg shadow-lg w-96 max-h-96 overflow-auto'>
                <button onClick={onClose} className='absolute top-2 right-2'>
                    <img src={cross} alt="Close" className='w-6 h-6' />
                </button>
                <div className='text-center mb-6'>
                    <h2 className='text-2xl font-bold'>Enter OTP</h2>
                    <p className='text-gray-600'>We have sent an OTP to your Email {email}</p>
                </div>
                <form   className='flex flex-col items-center'>
                    <div className='flex space-x-2 mb-6'>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                onKeyUp={(e) => handleKeyUp(e, index)}
                                maxLength="1"
                                className='text-center border border-gray-300 rounded py-2 px-4 w-12 text-xl focus:outline-none focus:border-blue-500'
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className='bg-blue-500 text-white py-2 px-6 rounded font-semibold'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OTPPopup;
