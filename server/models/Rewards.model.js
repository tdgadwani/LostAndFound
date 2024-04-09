import mongoose from "mongoose";

const RewardsSchema=new mongoose.Schema({
    rewardName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    coinCost: {
         type: Number,
         required: true,
    },
});

const Rewards=mongoose.model("Rewards",RewardsSchema)
export{
    Rewards
};