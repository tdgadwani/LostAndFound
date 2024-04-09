import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

const verifyJWT = asyncHandler(async(req,res,next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
        if(!token)
            throw new ApiError(403, "Unauthorized Request");
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken._id);
        if(!user)
            throw new ApiError(500, "Something Went Wrong");
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid Token")
    }
});

export {
    verifyJWT,
}