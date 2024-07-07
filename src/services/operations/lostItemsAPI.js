import toast from "react-hot-toast";
import {
    POST_LOST_ITEM,
    GET_LOST_ITEMS,
    GET_LOST_ITEMS_BY_ID,
    GET_LOST_ITEMS_BY_USER_ID,
} from "../apis.js";
import { apiConnector } from "../apiConnector.js";
import { setLostItems } from "../../slices/lostItemSlice.js";

const postLostItem = (formData,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST",POST_LOST_ITEM,formData,{
                "Content-Type": "multipart/form-data",
            });
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            //  navigate logic
            navigate("/lost-items")
        } catch (error) {
            toast.error(error.message);
        }
        toast.dismiss(toastId);
    }
};

const getLostItems = () => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await apiConnector("GET", GET_LOST_ITEMS);
          if (!response.data.success) {
            toast.error(response.data.message);
            throw new Error(response.data.message);
          }
          dispatch(setLostItems(response.data.lostItems));
          toast.success(response.data.message);
        } catch (error) {
            toast.error(error.message);
        }
        toast.dismiss(toastId);
    }
};

const getLostItemsById = (id,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await apiConnector(
            "GET",
            `${GET_LOST_ITEMS_BY_ID}/${id}`
          );
          if (!response.data.success) {
            toast.error(response.data.message);
            throw new Error(response.data.message);
          }
          toast.success(response.data.message);
          //  navigate logic
        } catch (error) {
            toast.error(error.message);
        }
        toast.dismiss(toastId);
    }
};

const getLostItemsForUser = (navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await apiConnector("GET", GET_LOST_ITEMS);
          if (!response.data.success) {
            toast.error(response.data.message);
            throw new Error(response.data.message);
          }
          toast.success(response.data.message);
          //  navigate logic
        } catch (error) {
            toast.error(error.message);
        }
        toast.dismiss(toastId);
    }
}

export {
    postLostItem,
    getLostItems,
    getLostItemsById,
    getLostItemsForUser,
};