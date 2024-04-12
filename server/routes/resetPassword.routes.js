import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import{generateResetPasswordToken,resetPassword } from "../controllers/ResetPassword.controller.js";

const resetPasswordRouter = express.Router();

resetPasswordRouter.post("/generate-reset-token", generateResetPasswordToken);
resetPasswordRouter.post("/reset-password/:token", resetPassword); 

export default resetPasswordRouter;