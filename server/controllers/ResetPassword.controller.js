import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { mailSender } from "../utils/mailSender.js";
import { RESET_PASSWORD_SUBJECT } from "../constants.js";

const generateResetPasswordToken = asyncHandler(async (req, res, _) => {
  const { email } = req.body;
  if (!email) 
    throw new ApiError(400, "Email id is required");

  const user = await User.findOne({ email });
  if (!user) throw new ApiError(400, "User Not Registered");

  const resetPasswordToken = crypto.randomBytes(20).toString("hex");

  user.resetPasswordToken = resetPasswordToken;
  user.resetPasswordTokenExpiry = Date.now() + 3600000; 
  await user.save();

  
  const response = await mailSender(email,RESET_PASSWORD_SUBJECT,`${resetPasswordToken}`);
//   console.log(response);
//     if(!response)
//         throw new ApiError(501,"Unable to Send Mail. Please try after Sometime");
  return res
    .status(200)
    .json(new ApiResponse(200, user, "Mail Sent Successfully"));
}); // tested

const resetPassword = asyncHandler(async (req, res, _) => {
  const token = req.params.token;
  let { password, cpassword } = req.body;
  if (!token || !password || !cpassword)
    throw new ApiError(400, "All fields are required");
  if (password !== cpassword)
    throw new ApiError(400, "Password and Confirm Password should be Same");

  const user = await User.findOne({ resetPasswordToken: token });
  if (!user) throw new ApiError(500, "Token is invalid");

  if ((Date.now(user.resetPasswordExpires) > Date.now()))
    throw new ApiError(403, "Token Expired");

  password = await bcrypt.hash(password, 10);
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        password,
        resetPasswordToken: null,
        resetPasswordTokenExpiry: null,
      },
    },
    { new: true, runValidators: false, }
  );

  if (!updatedUser) throw new ApiError(500, "Unable to update Password");

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password Updated Successfully"));
}); // tested



export { generateResetPasswordToken, resetPassword };
