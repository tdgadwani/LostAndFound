import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { RewardHistory } from "../models/RewardHistory.model.js";

const dailyCheckIn = asyncHandler(async(req,res) => {
    try {
        const user = req.user;
        const today = new Date().toISOString().split('T')[0];
        if(user.lastCheckInDate === today)
            return res.status(200).json(new ApiResponse(200,{},"User already Checked In for Today"))
        user.coins += 5;
        user.lastCheckInDate = today;
        await user.save();
        
        const rewardHistory = await RewardHistory.create({
          rewardType: "lastCheckInDate",
          rewardDate: today,
          userId: req.user._id,
        });
        if(!rewardHistory)
            throw new  ApiError(50,"Unable to Check-in. Please try after sometime");

        return res
          .status(200)
          .cookie("lastCheckedIn",today,{
            path: "/",
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
          })
          .json(
            new ApiResponse(200, {}, "User Successfully checkenin for today")
          );
    } catch (error) {
        throw new ApiError(403,error.message);
    }
});


export {
    dailyCheckIn,
}