import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userCheckedIn } from "./middlewares/checkIn.middleWare.js";

const app = express();

app.use(express.json({
    limit: "32kb",
}));

app.use(express.urlencoded({
    limit: "32kb",
    extended: true,
}));

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.static("public"));

app.use(cookieParser());

// app.use(userCheckedIn);


import userRouter from "./routes/user.routes.js";
import redemptionRouter from "./routes/redemption.route.js";
import rewardHistoryRouter from "./routes/rewardHistory.route.js";
import notificationRouter from "./routes/notification.route.js";

app.use("/api/v1/user",userRouter); 
app.use("/api/v1/redemption",redemptionRouter);
app.use("/api/v1/reward-history",rewardHistoryRouter);
app.use("/api/v1/notifications",notificationRouter);

export default app;