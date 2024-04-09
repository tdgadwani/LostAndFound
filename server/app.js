import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

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

import userRouter from "./routes/user.routes.js";
app.use("/api/v1/user",userRouter);

export default app;