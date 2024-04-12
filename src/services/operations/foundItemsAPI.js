import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector.js";
import {
    POST_FOUND_ITEM,
    GET_FOUND_ITEMS,
    GET_FOUND_ITEM_BY_ID,
    GET_FOUND_ITEMS_BY_USER_ID,
    UPDATE_FOUND_ITEMS,
    GET_RETREIVED__ITEMS,
} from "../apis.js";

const postFoundItem = (formData,navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST",POST_FOUND_ITEM,formData);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            // navigate
        } catch (error) {
            toast.error(error.message);
        }
        toast.dismiss(toastId);
    }
};

const getFoundItems = (navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("GET",GET_FOUND_ITEMS);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            // navigate logic
        } catch (error) {
            toast.error(error.message);
        }
        toast.dismiss(toastId);
    }
}

const getFoundItemsById = (id,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading");
        try {
            const response = await apiConnector("GET",`${GET_FOUND_ITEM_BY_ID}/${id}`);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            // navigate logic
        } catch (error) {
            toast.error(error.message)            
        }
        toast.dismiss(toastId);
    } 
};

const getFoundItemsForUser = (navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("GET",GET_FOUND_ITEMS_BY_USER_ID);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            // navigate logic
        } catch (error) {
            toast.error(error.message);
        }
        toast.dismiss(toastId);
    }
};

const updateFoundItem = (formData,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("PATCH",UPDATE_FOUND_ITEMS,formData);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            //  navigate logic
        } catch (error) {
            toast.error(error.message);
        }
    }
};

const getRetreivedItems = (navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("GET",GET_RETREIVED__ITEMS);
            if(!response.data.success) {
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
};

export {
    postFoundItem,
    getFoundItems,
    getFoundItemsById,
    getFoundItemsForUser,
    updateFoundItem,
    getRetreivedItems,
}