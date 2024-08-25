import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { RewardHistory } from "../models/RewardHistory.model.js";

const dailyCheckIn = asyncHandler(async(req,res) => {
    try {
      console.log("DailyCheckIn controller");
      
        // const user = req.user;
        // const today = new Date().toISOString().split('T')[0];
        // console.log("tgadwani today ", today);
        // if(user.lastCheckInDate === today)
        //     return res.status(200).json(new ApiResponse(200,{},"User already Checked In for Today"))
        // user.coins += 5;
        // user.lastCheckInDate = Date.now();
        // await user.save();
        
        const user= req.user;
        console.log("check in milisec",user.lastCheckInDate)
        const date = new Date(user.lastCheckInDate)
        const today = new Date();
        console.log("tgadwani ", today, date);
        console.log("Date: " +today.getDate() + "check IN Date :" +date.getDate() );
        if(date.getFullYear()===today.getFullYear()){
          if(date.getMonth()===today.getMonth()){
            if(date.getDate()<today.getDate()){
              console.log("Date Block");   //TODO: Have to remove
              user.coins += 1;
              user.lastCheckInDate=Date.now();
              await user.save({ validateBeforeSave: false });
              await Notification.create({
                userId:user._id,
                type:"Reward",
                message:"Completed a daily check-in mission, Coin increase +1"
              })
            }
          }
          else if(date.getMonth()<today.getMonth()){
            console.log("Month Block");   //TODO: Have to remove
            user.coins += 1;
            user.lastCheckInDate=Date.now();
            await user.save({ validateBeforeSave: false });
            await Notification.create({
              userId:user._id,
              type:"Reward",
              message:"Completed a daily check-in mission, Coin increase +1"
            })
          }
        }
        else if(date.getFullYear()<today.getFullYear()){
          console.log("Year Block");   //TODO: Have to remove
          user.coins += 1;
          user.lastCheckInDate=Date.now();
          await user.save({ validateBeforeSave: false });
          await Notification.create({
            userId:user._id,
            type:"Reward",
            message:"Completed a daily check-in mission, Coin increase +1"
          })
        }
        const rewardHistory = await RewardHistory.create({
          rewardType: "lastCheckInDate",
          rewardDate: today,
          userId: req.user._id,
        });
        if(!rewardHistory)
            throw new  ApiError(50,"Unable to Check-in. Please try after sometime");

        return res
          .status(200)
          .cookie("lastCheckedIn", today, {
            path: "/",
            httpOnly: true,
            secure: true,
            maxAge: 2 * 60 * 1000,
            sameSite: "None",
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