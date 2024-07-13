import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getNotifications } from "../controllers/notifications.controller.js";
import { userCheckedIn } from "../middlewares/checkIn.middleWare.js";

const notificationRouter = express.Router();

notificationRouter.route("/get-notifications").get(verifyJWT, userCheckedIn, getNotifications);

export default notificationRouter;