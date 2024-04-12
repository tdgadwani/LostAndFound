import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { LostItem } from "../models/LostItems.model.js";
import { User } from "../models/User.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const postLostItems = asyncHandler(async (req, res, _) => {
  const { itemName, category, description, address, contactInfo } = req.body;
  if (
    [itemName, category, description, address, contactInfo].some(
      (field) => typeof field === 'string' && field?.trim() === ""
    )
  )
    throw new ApiError(400, "All fields are Required");
  if (!req.files) throw new ApiError(403, "Image path is required");
  const imgUpload = async () => {
    try {
      const arr = await Promise.all(
        req.files.media.map(async (imgLink) => {
          const localPath = imgLink.path;
          const imgUrl = await uploadOnCloudinary(localPath);
          if (!imgUrl) {
            throw new ApiError(500, "Unable to upload Images");
          }
          return imgUrl.url;
        })
      );
      return arr;
    } catch (error) {
      throw new ApiError(500, "Unable to upload Images");
    }
  };
  const media = await imgUpload();
  if (!media)
    throw new ApiError(500, "Something Went Wrong While Uploading Image");

  const user = await User.findById(req.user?._id);
  //console.log(req.user?._id );
  //console.log(user);
  if (!user) {
    throw new ApiError(500, "something went wrong while fetching userid");
  }
  let Lost = await LostItem.create({
    itemName,
    category,
    description,
    media,
    userId: req.user?._id,
    address,
    contactInfo,
  });
  if (!Lost) throw new ApiError(500, "Unable to post lost item");
  return res
    .status(200)
    .json(new ApiResponse(200, Lost, "Lostitem posted Successfully"));
}); // tested

const getLostItems = asyncHandler(async (req, res, _) => {
  const lostItems = await LostItem.find({})
    .populate({
      path: "userId",
      select: "rollNo  fullName",
    })
    .exec();
  if (!lostItems) {
    throw new ApiError(500, "Unable to fech Lost Items");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, lostItems, "Lost Items fetched Successfully"));
}); // tested

const getLostItemsById = asyncHandler(async (req, res, _) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "Lost Item ID is required");
  }
  try {
    const LostItembyId = await LostItem.findById(id);

    if (!LostItembyId) {
      throw new ApiError(404, "Lost Item not found");
    }
    return res
      .status(200)
      .json(
        new ApiResponse(200, LostItembyId, "Lostitem fetched successfully")
      );
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
}); // tested

const getLostItemsByUId = asyncHandler(async (req, res, _) => {
  const userId = req.user._id;
  if (!userId) {
    throw new ApiError(400, "Missing required parameter: user_id");
  }
    const lostItemsByUId = await LostItem.find({ userId });

    if (!lostItemsByUId) {
      throw new ApiError(404, "No Lost Items found for this user");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, lostItemsByUId, "Lost Items fetched Successfully"));
}); // tested

export { 
    postLostItems, 
    getLostItems, 
    getLostItemsById, 
    getLostItemsByUId 
};
