import React, { useRef, useState } from 'react'
import Button from './Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../services/operations/authAPI.js';

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            userName: emailRef.current.value,
            password: passwordRef.current.value,
        };
        emailRef.current.value = null;
        passwordRef.current.value = null;
        console.log(formData);
        dispatch(loginUser(formData, navigate));
        // connect with backend
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-evenly items-center h-52 '>
                    <div>
                        <input type='text' placeholder='Email or Username' ref={emailRef}
                            className='w-80 h-8 rounded-xl placeholder:text-center' />
                    </div>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} placeholder='Enter Password' ref={passwordRef}
                            className='w-80 h-8 rounded-xl pl-8 placeholder:text-center' />
                        <span
                            className='absolute top-2 right-2 cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (
                                <AiOutlineEyeInvisible />
                            ) : (
                                <AiOutlineEye />
                            )}
                        </span>
                    </div>
                    <div>
                        <Button buttonTxt={"Login"} buttonClr={"bg-black"} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
