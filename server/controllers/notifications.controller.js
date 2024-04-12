import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Notification } from "../models/Notification.models.js";

const getNotifications = AsyncHandler(async(req,res) => {
    const userId = re.user_.id;
    if(!userId)
        throw new ApiError(200,"User Id is Required");
    const notifications = await Notification.find({userId});
    return res.status(200).json(new ApiResponse(200,notifications,"Notifications fetched Successfully"));
});

export {
    getNotifications,
}