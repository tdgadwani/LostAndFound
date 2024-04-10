import { AsyncHandler, asynchandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { FoundItem } from "../models/FoundItems.model.js";
import { User } from "../models/User.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const postFoundItems = AsyncHandler(async (req, res, _) => {
  const { itemName, category, description, locationFound, contactInfo } = req.body;

  if (
    [itemName, category, description, locationFound, contactInfo].some(
      (field) => field?.trim() === ""
    )
  )
    throw new ApiError(400, "All fields are Required");

  if (!req.files) throw new ApiError(403, "Image path is required");

  const imgUpload = async () => {
    try {
      const arr = await Promise.all(
        req.files.map(async (imgLink) => {
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

  let Found;
  const user = await User.findById(req._id); // Assuming user ID from request

  Found = await FoundItem.create({
    itemName,
    category,
    description,
    media,
    foundBy: req.user._id, // Assuming user ID from request
    locationFound,
    contactInfo,
  });

  if (!Found) throw new ApiError(500, "Unable to post found item");

  return res
    .status(200)
    .json(new ApiResponse(200, Found, "Found Item posted Successfully"));
});

const getFoundItems = AsyncHandler(async (req, res, _) => {
  const foundItems = await FoundItem.find({}).populate({
    path: "userId",
    select: "username contactInfo",
  }).exec();

  if (!foundItems) {
    throw new ApiError(500, "Unable to fetch Found Items");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, foundItems, "Found Items fetched Successfully"));
});

const getFoundItemById = AsyncHandler(async (req, res, _) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "Found Item ID is required");
  }

  try {
    const foundItemById = await FoundItem.findById(id);

    if (!foundItemById) {
      throw new ApiError(404, "Found Item not found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, foundItemById, "Found Item fetched successfully"));
  } catch (error) {
    console.error(error);
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message });
  }
});

const getFoundItemsByUId = AsyncHandler(async (req, res, _) => {
  const { user_id } = req.query;

  if (!user_id) {
    throw new ApiError(400, "Missing required parameter: user_id");
  }

  try {
    const foundItemsByUid = await FoundItem.find({ foundBy: user_id }); // Assuming foundBy field

    if (!foundItemsByUid) {
      throw new ApiError(404, "No Found Items found for this user");
    }

    return res.status(200).json( new ApiResponse(200, foundItem, "FoundItems fetched Successfully"));

}catch(error)
{
    console.error(error);
    return res.status(error.statusCode || 500).json({ message: error.message });
}
});
const updateFoundItem = AsyncHandler(async (req, res, _) => {
    const { id } = req.params;
    const { itemName, category, description, locationFound, contactInfo } = req.body;
  
    if (!id) {
      throw new ApiError(400, "Found Item ID is required for update");
    }
  
    const foundItem = await FoundItem.findById(id);
  
    if (!foundItem) {
      throw new ApiError(404, "Found Item not found");
    }
  
    
    foundItem.itemName = itemName || foundItem.itemName;
     // Update only if provided
     foundItem.category = category || foundItem.category;
     foundItem.description = description || foundItem.description;
     foundItem.locationFound = locationFound || foundItem.locationFound;
     foundItem.contactInfo = contactInfo || foundItem.contactInfo;
    
  
    try {
      const updatedFoundItem = await foundItem.save();
      return res
        .status(200)
        .json(new ApiResponse(200, updatedFoundItem, "Found Item updated successfully"));
    } catch (error) {
      console.error(error);
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message });
    }
  });

export{
    postFoundItems,
    getFoundItems,
    getFoundItemsByUId,
    getFoundItemById,
    updateFoundItem,
};

