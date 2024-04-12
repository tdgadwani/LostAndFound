import { setSignupData, setToken, setUserData } from "../../slices/authSlice.js";
import { apiConnector } from "../apiConnector.js";
import { SEND_OTP_URL, RESEND_OTP_URL, SIGNUP_URL, LOGIN_URL, LOGOUT_URL, } from "../apis.js";
import { toast } from "react-hot-toast";

const sendOTP = (formData,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST",SEND_OTP_URL,formData);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success("OTP Sent Successfully");
            dispatch() // to be planned
        } catch (error) {
            console.log(error.message);
        }
        toast.dismiss(toastId);
    }
};

const resendOTP = (formData,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try{
            const response = await apiConnector("POST",RESEND_OTP_URL,formData);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success("OTP Resent Succesfully");
            dispatch()//to be planned
        }catch(error) {
            console.log(error.message);
        }
        toast.dismiss(toastId);
    }
}

const signupUser = (formData,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST",SIGNUP_URL,formData);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success("User Registered Successfully");
            dispatch(setSignupData(null));
            dispatch(setToken(response.data.accessToken));
            // navigate user to dashboard
        } catch (error) {
            console.log(error.message);
        }
        toast.dismiss(toastId);
    }
};

const loginUser = (formData,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", LOGIN_URL, formData, {
              "Content-Type": "application/x-www-form-urlencoded",
            });
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success("User Logged-In Successfully");
            dispatch(setUserData(response.data.user));
            dispatch(setToken(response.data.accessToken));
            // navigate()//to be planned
        } catch (error) {
            console.log(error.message);
        }
        toast.dismiss(toastId);
    }
};

const logoutUser = (navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST",LOGOUT_URL);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success("User logged out Successfully");
            dispatch(setUserData(null));
            dispatch(setToken(null));
            navigate() // to be planned
        } catch (error) {
            console.log(error.message);
        }
    }
}

export {
    sendOTP,
    resendOTP,
    signupUser,
    loginUser,
    logoutUser,
}