import toast from "react-hot-toast";
import {
    RESET_PASSWORD_TOKEN,
    RESET_PASSWORD,
} from "../apis.js";
import { apiConnector } from "../apiConnector.js";
import { ROUTES } from "../../utils/constants.js";

const resetPasswordToken = (formData, navigate) => { 
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST",RESET_PASSWORD_TOKEN,formData);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            //  navigate logic
            navigate(ROUTES.LOGIN);
        } catch (error) {
            toast.error(error.message);
        } finally {
            toast.dismiss(toastId);
        }
    }
};

const resetPassword = (formData,token,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await apiConnector(
            "POST",
            `${RESET_PASSWORD}/${token}`,
            formData
          );
          if (!response.data.success) {
            toast.error(response.data.message);
            throw new Error(response.data.message);
          }
          toast.success(response.data.message);
          //  navigate logic
          navigate(ROUTES.LOGIN);
        } catch (error) {
          toast.error(error.message);
        } finally {
          toast.dismiss(toastId);
        }
    }
}

export {
    resetPasswordToken,
    resetPassword,
}