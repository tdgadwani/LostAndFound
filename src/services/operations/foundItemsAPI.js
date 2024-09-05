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
import { setFoundItems } from "../../slices/foundItemSlice.js";
import { setClaimedItems } from "../../slices/claimedItemSlice.js";
import { ROUTES } from "../../utils/constants.js";

const postFoundItem = (formData,navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await apiConnector(
            "POST",
            POST_FOUND_ITEM,
            formData
          );
          if (!response.data.success) {
            toast.error(response.data.message);
            throw new Error(response.data.message);
          }
          toast.success(response.data.message);
          navigate(ROUTES.FOUNDITEMS);
        } catch (error) {
          toast.error(error.message);
        } finally {
          toast.dismiss(toastId);
        }
    }
};

const getFoundItems = () => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("GET",GET_FOUND_ITEMS);
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            console.log("tgadwani ", response.data.data);
            dispatch(setFoundItems(response.data.data));
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.message);
        } finally{
            toast.dismiss(toastId);
        }
    }
}

const getFoundItemsById = (id,navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading");
        try {
          const response = await apiConnector(
            "GET",
            `${GET_FOUND_ITEM_BY_ID}/${id}`
          );
          if (!response.data.success) {
            toast.error(response.data.message);
            throw new Error(response.data.message);
          }
          toast.success(response.data.message);
          // navigate logic
        } catch (error) {
          toast.error(error.message);
        } finally {
          toast.dismiss(toastId);
        }
    } 
};

const getFoundItemsForUser = (navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await apiConnector(
            "GET",
            GET_FOUND_ITEMS_BY_USER_ID
          );
          if (!response.data.success) {
            toast.error(response.data.message);
            throw new Error(response.data.message);
          }
          toast.success(response.data.message);
          // navigate logic
        } catch (error) {
          toast.error(error.message);
        } finally {
          toast.dismiss(toastId);
        }
        
    }
};

const updateFoundItem = (formData, id, navigate) => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await apiConnector(
            "PATCH",
            UPDATE_FOUND_ITEMS + id,
            formData
          );
          if (!response.data.success) {
            toast.error(response.data.message);
            throw new Error(response.data.message);
          }
          toast.success(response.data.message, {duration: 4000});
          //  navigate logic
          if(response.data.statusCode !== 403)
            navigate(ROUTES.CLAIMEDITEMS);
        } catch (error) {
          toast.error(error.message || "Some thing Went Wrong");
        } finally {
          toast.dismiss(toastId);
        }
    }
};

const getRetreivedItems = () => {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await apiConnector("GET", GET_RETREIVED__ITEMS);
          if (!response.data.success) {
            toast.error(response.data.message);
            throw new Error(response.data.message);
          }
          dispatch(setClaimedItems(response.data.data));
          toast.success(response.data.message);
        } catch (error) {
          toast.error(error.message);
        } finally {
          toast.dismiss(toastId);
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