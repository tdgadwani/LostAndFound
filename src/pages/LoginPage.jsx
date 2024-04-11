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
    <div>
        {/* Side style to be rendered */}
        
        <div>
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