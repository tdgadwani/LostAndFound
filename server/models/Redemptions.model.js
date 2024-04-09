import mongoose from "mongoose";

const redemptionSchema = new mongoose.Schema({
	userId: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'User',
    	required: true
  	},
  	rewardId: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'Reward',
    	required: true,
  	},
  	redemptionDate: {
		type: Date,
		required: true,
		default: Date.now
  	},
});

const Redemption = mongoose.model("Redemption", redemptionSchema);

export { Redemption };