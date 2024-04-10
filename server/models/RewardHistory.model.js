import mongoose, { Schema } from "mongoose";


const  rewardHistorySchema=new mongoose.Schema({
    rewardType:{
        type:String,
        enum: ["lastCheckInDate","foundItem"],
        required: true,
    },
    rewardDate:{
        type: Number ,
        required: true,
        default: Date.now(),       
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User' ,
        required: true,
    }
});

const RewardHistory = mongoose.model("RewardHistory", rewardHistorySchema);

export { RewardHistory };