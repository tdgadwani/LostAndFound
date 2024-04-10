import express from "express";
import { loginUser, logoutUser, resendOTP, sendOTP, signupUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.route("/send-otp").post(sendOTP);
router.route("/resend-otp").post(resendOTP);
router.route("/signup").post(upload.single("avatar"),signupUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT,logoutUser);


export default router;