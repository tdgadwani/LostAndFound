import express from "express";
import { appDetails, editProfile, getDetails, getLeaderBoardData, loginUser, logoutUser, resendOTP, sendOTP, signupUser, subscribeUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { userCheckedIn } from "../middlewares/checkIn.middleWare.js";

const userRouter = express.Router();

userRouter.route("/subscribe-user").post(subscribeUser);
userRouter.route("/app-details").get(appDetails);
userRouter.route("/send-otp").post(sendOTP);
userRouter.route("/resend-otp").post(resendOTP);
userRouter.route("/signup").post(upload.single("avatar"),signupUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/edit-profile").post(verifyJWT,userCheckedIn,editProfile);
userRouter.route("/leaderboard").get(verifyJWT,userCheckedIn, getLeaderBoardData);
userRouter.route("/logout").post(verifyJWT,logoutUser);
userRouter.route("/getDetails").get(verifyJWT, getDetails);


export default userRouter;