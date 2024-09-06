import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(403, "Unauthorized Request: No Token Provided");
    }

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        await logoutUser(req, res); 
        return; 
      } else if (err.name === "JsonWebTokenError") {
        throw new ApiError(401, "Invalid Access Token");
      } else {
        throw new ApiError(500, "Internal Server Error");
      }
    }

    const user = await User.findById(decodedToken._id);

    if (!user) {
      throw new ApiError(403, "User not found");
    }

    req.user = user; // Attach the authenticated user to the request
    next(); // Continue to the next middleware
  } catch (error) {
    next(new ApiError(401, error?.message || "Unauthorized Request"));
  }
});

export { verifyJWT };
