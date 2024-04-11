import React, { useRef, useState } from 'react'
import Button from './Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showPassword,setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        emailRef.current.value = null;
        passwordRef.current.value= null;
        console.log(formData);
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