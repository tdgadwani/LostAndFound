import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getNotifications } from "../controllers/notifications.controller.js";

const notificationRouter = express.Router();

Router.route("/get-notifications").get(verifyJWT,getNotifications);

export default notificationRouter;