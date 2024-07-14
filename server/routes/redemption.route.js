import express from "express";
import { buyReward } from "../controllers/redemptions.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { userCheckedIn } from "../middlewares/checkIn.middleWare.js";

const redemptionRouter = express.Router();

redemptionRouter.route("/buy-reward").post(verifyJWT,userCheckedIn,buyReward);

export default redemptionRouter;