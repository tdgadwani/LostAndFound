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

const Reward = mongoose.model("Rewards",RewardsSchema)
export{
    Reward,
};