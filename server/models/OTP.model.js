import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
	otp: {
    	type: String,
    	required: true,
  	},
  	email: {
	    type: mongoose.Schema.Types.ObjectId,
    	ref:'User',
		required: true,
	},
  	createdAt: {
    	type: Date,
 	   	default: Date.now(),
	   	expires: 300,
  	},
});

otpSchema.index({
		"createdAt": 1,  
	},
	{
		expireAfterSeconds: 300,
	}
);

const OTP = mongoose.model("OTP", otpSchema);

export { OTP };
