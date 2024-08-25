import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { GET_NOTIFICATIONS } from "../apis";
import { setNotification, setNotiloading } from "../../slices/notificationSlice";

const getNotifications=()=>{
    return async(dispatch)=>{
        dispatch(setNotiloading(true));
        try {
            const response=await apiConnector("GET",GET_NOTIFICATIONS);
            if (!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            dispatch(setNotification(response.data.data));
            dispatch(setNotiloading(false))
        } catch (error) {
            dispatch(setNotiloading(false))
            toast.error(error.message);
        }
    }
}

export {getNotifications};