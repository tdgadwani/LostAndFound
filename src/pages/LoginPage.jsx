import React, { useState } from 'react'
import CreateAccountPopup from '../components/CreateAccountPopup';
import Login from '../components/Login';
import OTPVerificationPage from '../components/OTPVerificationPage';

const LoginPage = () => {
    const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);
    const [showVerificationOTPPage, setShowVerificationOTPPage] = useState(false);
    const handleCreateAccount = () => {
        setShowCreateAccountPopup(true);
        console.log("rushar randi")
        console.log(showCreateAccountPopup)
    }
    const handleRegistrationSuccess = () => {
    setShowCreateAccountPopup(false);
    setShowVerificationOTPPage(true);
  };
  return (
    <div className='bg-kaddu-400 h-screen flex items-center jus'>
        {/* Side style to be rendered */}
        <div className=' h-screen basis-2/3'>
            Background
        </div>
        
        <div className='basis-1/3'>
            <Login/>
            <div>
                <span>Forgot Password ?</span>
            </div>
            < div className='flex'>
            <div>New User ?</div>
            <div ><button onClick={handleCreateAccount}>Create Account</button></div>
            {showCreateAccountPopup &&
                <CreateAccountPopup onSuccess={handleRegistrationSuccess}/>}

                {showVerificationOTPPage && <OTPVerificationPage/>}
            </div>

        </div>
        
    </div>
  )
}

export default LoginPage