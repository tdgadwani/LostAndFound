import { setAppData, setLeaderBoardData, setLeaderBoardLoading, setSignupData, setToken, setUserData } from "../../slices/authSlice.js";
import { ROUTES } from "../../utils/constants.js";
import { apiConnector } from "../apiConnector.js";
import { SEND_OTP_URL, RESEND_OTP_URL, SIGNUP_URL, LOGIN_URL, LOGOUT_URL, EDIT_PROFILE, LEADERBOARD_URL, APP_DETAILS, SUBSCRIBE_USER, } from "../apis.js";
import { toast } from "react-hot-toast";


const subscribeUser = (formData) => {
    return async() => {
      try {
        const response = await apiConnector("POST",SUBSCRIBE_USER, formData);
        if(!response.data.success) {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error(error.message);
        
      }
    }
}

const appDetails = () => {
    return async (dispatch) => {
      try {
        const response = await apiConnector("GET",APP_DETAILS);
        if(!response.data.success) {
          throw new Error(response.data.message);
        }
        dispatch(setAppData(response.data.data));
      } catch (e) {
        console.error(e.message);
      }
    }
}
const sendOTP = (formData,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST",SEND_OTP_URL,formData);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            // dispatch() // to be planned
            dispatch(setSignupData(formData))
        } catch (error) {
            console.log(error.message);
        } finally { 
          toast.dismiss(toastId);
        }
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
            toast.success(response.data.message);
            // dispatch()//to be planned
        }catch(error) {
            console.log(error.message);
        } finally {
          toast.dismiss(toastId);
        }
    }
}

const signupUser = (formData, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", SIGNUP_URL, formData);
      
      if (!response.data.success) {
        toast.error(response.data.message);
        throw new Error(response.data.message);
      }
      toast.success(response.data.message);
    //   console.log(response.data);
      dispatch(setSignupData(null)); 
      dispatch(setToken(response.data.accessToken)); 

      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error.message); 
    } finally {
      toast.dismiss(toastId);
    }
  };
};


const loginUser = (formData, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", LOGIN_URL, formData, {
        "Content-Type": "application/x-www-form-urlencoded",
      });
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success(response.data.message);      
      dispatch(setUserData(response.data.data.user));
      dispatch(setToken(response.data.data.accessToken));
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error.message);
      
      toast.error(error.message);
    } finally {
      toast.dismiss(toastId);
    }
  };
};

const logoutUser = () => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST",LOGOUT_URL);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            dispatch(setUserData(null));
            dispatch(setToken(null));
            // navigate("/login"); // to be planned
        } catch (error) {
            console.log(error.message);
        } finally {
          toast.dismiss(toastId);
        }
    }
};

const editProfile = (formData,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading");
        try {
            const response = await apiConnector("POST",EDIT_PROFILE,formData);
            if(!response.data.success) {
                throw new Error(response.data.message);
            }
            dispatch(setUserData(response.data.data.user));
            toast.success(response.data.message);
            navigate(ROUTES.HOME);
        } catch (error) {
            toast.error(error.message);
        } finally {
          toast.dismiss(toastId);
        }
    }
}

const getLeaderBoardData = () => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    setLeaderBoardLoading(true);
    try {
      const response = await apiConnector("GET",LEADERBOARD_URL);
      if(!response.data.success) {
        throw new Error(response.data.message);
      }
      console.log("rrgrsf ", response);
      setLeaderBoardLoading(false);
      dispatch(setLeaderBoardData(response.data.data.leaderBoardData));
      toast.success(response.data.message);
    } catch (error) {
      setLeaderBoardLoading(false);
      toast.error(error.message);
    } finally {
      setLeaderBoardLoading(false);
      toast.dismiss(toastId);
    }
  }
}

export {
    appDetails,
    subscribeUser,
    sendOTP,
    resendOTP,
    signupUser,
    loginUser,
    logoutUser,
    editProfile,
    getLeaderBoardData,
};