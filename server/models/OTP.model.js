import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
	otp: {
    	type: String,
    	required: true,
  	},
  	email: {
	    type: String,
		required: true,
	},
  	createdAt: {
    	type: Date,
 	   	default: new Date(),
	   	expires: 300,
  	},
	expiresAt: {
		type: Date,
		default: new Date() + 300000,
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
