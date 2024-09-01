import { Notification } from "../models/Notifications.models.js";
import { RewardHistory } from "../models/RewardHistory.model.js";
import { ApiError } from "./ApiError.js";


const handelUserCheckIn=async(user,today)=>{
    try {
        user.coins += 1;
        user.lastCheckInDate=Date.now();
        await user.save({validateBeforeSave: false });
        await Notification.create({
          userId: user._id,
          type: "Reward",
          message: "Check-in complete! See you tomorrow! +1",
        });
        const rewardHistory = await RewardHistory.create({
            rewardType: "lastCheckInDate",
            rewardDate: today,
            userId: user._id,
        });
        if(!rewardHistory)
            throw new  ApiError(50,"Unable to Check-in. Please try after sometime");
    } catch (error) {
        throw new ApiError(500, error.message || "An error occurred during check-in");
    }

}

export {
    handelUserCheckIn
}
