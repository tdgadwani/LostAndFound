import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Redemption } from "../models/Redemptions.model.js";
import { Reward } from "../models/Rewards.model.js";

const buyReward = asyncHandler(async(req,res) => {
    const { rewardID } = req.params;
    const user = req.user;
    if(!rewardID)
        throw new ApiError(401,"Reward ID is required");
    const reward = Reward.findByID(rewardID);
    if(!reward)
        throw new ApiError("Invalid Reward ID");
    if(user.coins < coinCost)
        throw new ApiError("Not Enough Coins to purchase");
    const redemption = Redemption.create({
        userId: req.user._id,
        rewardID: reward._id,
    });
    if(!redemption)
        throw new ApiError(501,"Unable to Redeem Reward");
    user.coins -= coinCost;
    await user.save({validateBeforeSave: false});
    return res.status(200).json(new ApiResponse(200,redemption,"Order Placed Succesfully"));
});

export {
    buyReward,
};