import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { FoundItem } from "../models/FoundItems.model.js";

const postFoundItem  = asyncHandler(async(req,res) => {
    const { } = req.body;

});

export {
    postFoundItem,
}