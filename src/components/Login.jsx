import React, { useRef, useState } from 'react'
import Button from './Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../services/operations/authAPI.js';

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showPassword,setShowPassword] = useState(false);
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
        passwordRef.current.value= null;
        console.log(formData);
        dispatch(loginUser(formData,navigate));
        // connect with backend
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Email or Username' ref={emailRef}/>
            <input type={showPassword ? "text" : "password"} placeholder='Enter Password' ref={passwordRef} />
            <span onClick={() => setShowPassword((prev) => !prev) }>
                {showPassword ? (
                    <AiOutlineEyeInvisible/>
                ) : (
                    <AiOutlineEye/>
                )}
            </span>
            <Button buttonTxt={"Login"} buttonClr={"bg-black"} />
        </form>
    </div>
  )
}

export default Login