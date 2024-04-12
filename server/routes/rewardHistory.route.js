import express from "express";
import { dailyCheckIn } from "../controllers/rewardHistory.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const rewardHistoryRouter = express.Router();

rewardHistoryRouter.route("/check-in").post(verifyJWT,dailyCheckIn);

export default rewardHistoryRouter;