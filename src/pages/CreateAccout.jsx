import React, { useState } from 'react'
import CreateAccountPopup from '../components/CreateAccountPopup';
import Login from '../components/Login';
import OTPVerificationPage from '../components/OTPVerificationPage';
import BGImage from '../assets/SignIn_Page.svg'
import CreateAcc from '../assets/Create_Account.svg'
import Logo from '../assets/LOGO.svg'
import googleLogo from '../assets/googleLogin.svg'
import appleLogo from '../assets/appleLogin.svg'

const CreateAccount = () => {
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
    <>
    <div className='bg-kaddu-500 flex h-screen justify-between' style={{backgroundImage:`url(${BGImage})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",}}>

      <div className='w-1/2' ></div>
      <div className='w-2/5 m-8 bg-white flex flex-col justify-evenly items-center rounded-3xl'>

        <div>
         <div><img src={Logo} alt="" /></div>  
        </div>

        <div className=' flex flex-col justify-evenly items-center '> 
          <div className='my-2'><img src={CreateAcc}/></div>
          <div className='my-2'>
            <div className='w-full'><input type="text" placeholder='email' className=' border-2 py-2 px-10' /></div>
            <div><input type="text" placeholder='password'  className=' border-2 py-2 px-10 mt-2'  /></div>
            <div>
              <button className='bg-kaddu-500 p-3 w-full border-2 mt-2 font-bold text-xl'>create Account</button>
            </div>
          </div>
          <div className='my-2'> or signin with</div>
          <div className='flex items-center justify-between my-2'>
            <div className='mr-7'><img src={googleLogo}/></div>
            <div> <img src={appleLogo} alt="" /></div>
            <div className='ml-7'> <img src={appleLogo} alt="" /></div>
          </div>
          <div className='my-2'>By creating account you agree to Relink <br></br>
          Terms of Services and Privacy Policy</div>
        </div>

        <div>
          <div>have an account login</div>
        </div>

      </div>
    </div>
    </>
  )
}

export default CreateAccount