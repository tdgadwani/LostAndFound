import mongoose, { Schema } from "mongoose";
import { User } from "./User.model.js";


const  rewardHistorySchema=new mongoose.Schema(
    {
        rewardType:{
            type:String,
            required:true,
        },
        rewardDate:{
           type: Number ,
           required: true,
           default: Date.now(),
           
        },
        userId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User' ,
            required: true,
        }

    }
);
const RewardHistory = mongoose.model("RewardHistory", rewardHistorySchema);

export { RewardHistory };