import toast from "react-hot-toast";
import {
    POST_LOST_ITEM,
    GET_LOST_ITEMS,
    GET_LOST_ITEMS_BY_ID,
    GET_LOST_ITEMS_BY_USER_ID,
} from "../apis.js";
import { apiConnector } from "../apiConnector.js";

const postLostItem = (formData,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST",POST_LOST_ITEM,formData);
            if(!response.data.success){
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

const getLostItems = (navigate) => {
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