import express from "express";
import { loginUser, logoutUser, resendOTP, sendOTP, signupUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = express.Router();

userRouter.route("/send-otp").post(sendOTP);
userRouter.route("/resend-otp").post(resendOTP);
userRouter.route("/signup").post(upload.single("avatar"),signupUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").post(verifyJWT,logoutUser);


export default userRouter;