import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  otp: {
    type: String,
    required: true,
  },
  email: {
    type:String,// mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  expiresAt: {
    type: Date,
    default: () => Date.now() + 100000, 
  },
});

// Index the expiresAt field
otpSchema.index({ expiresAt: 1 });

const OTP = mongoose.model("OTP", otpSchema);

export { OTP };
