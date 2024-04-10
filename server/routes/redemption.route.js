import express from "express";
import { buyReward } from "../controllers/redemptions.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const redemptionRouter = express.Router();

redemptionRouter.route("/buy-reward").post(verifyJWT,buyReward);

export default redemptionRouter;