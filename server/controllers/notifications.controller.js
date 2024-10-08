import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Notification } from "../models/Notifications.models.js";

const getNotifications = asyncHandler(async(req,res) => {
    const userId = req.user._id;
    if(!userId)
        throw new ApiError(200,"User Id is Required");
    const notifications = await Notification.find({userId}).sort({timestamp:-1});
    return res.status(200).json(new ApiResponse(200,notifications,"Notifications fetched Successfully"));
});

export {
    getNotifications,
}