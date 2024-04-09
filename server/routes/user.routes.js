import express from "express";
import { loginUser, logoutUser, resendOTP, sendOTP, signupUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/send-otp").post(sendOTP);
router.route("/resend-otp").post(resendOTP);
router.route("/signup").post(signupUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);


export default router;