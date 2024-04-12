const nodemailer = require("nodemailer");
const { asynchandler } = "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { RESET_PASSWORT_SUBJECT } from "../constants.js";
import crypto from "crypto";
import bcrypt from "bcrypt";

const generateResetPasswordToken = asynchandler(async (req, res, _) => {
  const { email } = req.body;
  if (!email) throw new ApiError(400, "Email id is required");

  const user = await User.findOne({ email });
  if (!user) throw new ApiError(400, "Invalid Email");

  const resetPasswordToken = crypto.randomBytes(20).toString("hex");

 
  user.resetPasswordToken = resetPasswordToken;
  user.resetPasswordTokenExpiry = Date.now() + 3600000; 
  await user.save();

  
  await sendResetPasswordEmail(email, resetPasswordToken);

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Mail Sent Successfully"));
});

const resetPassword = asynchandler(async (req, res, _) => {
  const token = req.params.token;
  let { password, cpassword } = req.body;
  if (!token || !password || !cpassword)
    throw new ApiError(400, "All fields are required");
  if (password !== cpassword)
    throw new ApiError(400, "Password and Confirm Password should be Same");

  const user = await User.findOne({ resetPasswordToken: token });
  if (!user) throw new ApiError(500, "Token is invalid");

  // Check for token expiration (optional)
  // if (!(user.resetPasswordExpires > Date.now()))
  //   throw new ApiError(403, "Token Expired");

  password = await bcrypt.hash(password, 10);
  const updatedUser = await User.findByIdAndUpdate(user._id, {
    $set: {
      password,
      resetPasswordToken: null,
      resetPasswordTokenExpiry: null,
    },
  }, { new: true });

  if (!updatedUser) throw new ApiError(500, "Unable to update Password");

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password Updated Successfully"));
});

const sendResetPasswordEmail = async (email, resetPasswordToken) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, 
    port: process.env.EMAIL_PORT, 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  const emailContent = `
    <h2>Reset Password</h2>
    <p>You have requested to reset your password.</p>
    <p>Click the link below to reset your password:</p>
    <a href="${process.env.FRONTEND_URL}/reset-password/${resetPasswordToken}">Reset Password</a>
    <p>If you did not request a password reset, please ignore this email.</p>
  `;

  await transporter.sendMail({
    from: '"Your App Name" <noreply@yourapp.com>', 
    to: email,
    subject: RESET_PASSWORT_SUBJECT,
    html: emailContent,
  });
};

export { generateResetPasswordToken, resetPassword };
