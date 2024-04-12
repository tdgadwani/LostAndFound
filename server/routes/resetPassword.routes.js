import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import{generateResetPasswordToken,resetPassword } from "../controllers/ResetPassword.controller.js";

const resetPasswordRouter = express.Router();
resetPasswordrouter.post("/generate-reset-token", verifyJWT, generateResetPasswordToken);
resetPasswordrouter.post("/reset-password", verifyJWT, resetPassword); 

export default resetPasswordRouter;