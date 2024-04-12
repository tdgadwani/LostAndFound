import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { FoundItem } from "../models/FoundItems.model.js";
import { User } from "../models/User.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const postFoundItems = asyncHandler(async (req, res, _) => {
  const { itemName, category, description, address, contactInfo } = req.body;
  console.log(req.body)
 if (
   [itemName, category, description, address, contactInfo].some(
     (field) => typeof field === "string" && field.trim() === ""
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

  let Found;
  const user = await User.findById(req.user._id); // Assuming user ID from request

  Found = await FoundItem.create({
    itemName,
    category,
    description,
    media,
    userId: req.user._id, // Assuming user ID from request
    address,
    contactInfo,
  });
  user.coins += 40;
  await user.save({validateBeforeSave: false});
  if (!Found) throw new ApiError(500, "Unable to post found item");

  return res
    .status(200)
    .json(new ApiResponse(200, Found, "Found Item posted Successfully"));
}); // tested 

const getFoundItems = asyncHandler(async (req, res, _) => {
  const foundItems = await FoundItem.find({})
    .populate({
      path: "userId",
      select: "rollNo fullName",
    })
    .exec();

  if (!foundItems) {
    throw new ApiError(500, "Unable to fetch Found Items");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, foundItems, "Found Items fetched Successfully"));
}); // tested

const getFoundItemById = asyncHandler(async (req, res, _) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "Found Item ID is required");
  }

  try {
    const foundItemById = await FoundItem.findById(id).populate({path: "userId",select: "rollNo fullName"}).exec();

    if (!foundItemById) {
      throw new ApiError(404, "Found Item not found");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, foundItemById, "Found Item fetched successfully")
      );
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
}); // tested

const getFoundItemsByUId = asyncHandler(async (req, res, _) => {
  const userId = req.user._id;

  if (!userId) {
    throw new ApiError(400, "Missing required parameter: userId");
  }

  try {
    const foundItemsByUid = await FoundItem.find({ userId }).populate({path:"userId",select:"rollNo fullName"}).exec(); // Assuming foundBy field

    if (!foundItemsByUid) {
      throw new ApiError(404, "No Found Items found for this user");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, foundItemsByUid, "FoundItems fetched Successfully"));
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
});// tested

const updateFoundItem = asyncHandler(async (req, res, _) => {
  const { id } = req.params;
  const { isRetrieved, retrievedByUser } = req.body;
  console.log(typeof isRetrieved, req.body);
  if (!id) {
    throw new ApiError(400, "Found Item ID is required for update");
  }
  if(!isRetrieved || !retrievedByUser)
    throw new ApiError(401,"All Fields are Required");

  const retrievedBy = await User.findOne({rollNo:retrievedByUser}).select("_id");
  console.log(retrievedBy);
  if(!retrievedBy)
    throw new ApiError(403,"User with given Roll No. Not found"); 
  const foundItem = await FoundItem.findByIdAndUpdate(id,{
      $set:{
          isRetrieved,
          retrievedBy,
          retrivedDate: new Date(),
      }},{
        new: true,
      }
  );

  if (!foundItem)
    throw new ApiError(404, "Found Item not found");
  const user = req.user;
  user.coins += 10;
  await user.save();
  return res
      .status(200)
      .json(
        new ApiResponse(200, foundItem, "Found Item updated successfully"));
}); //tested

const getRetrievedItems = asyncHandler(async(req,res) => {
    const retrivedItems = await FoundItem.find({ isRetrieved: true }).populate({
      path: "retrievedBy",
      select: "rollNo fullName",
    }).exec();
    if(!retrivedItems)
      throw new ApiError(501,"Unable to fetch Retrived Items"); 
    return res.status(200).jsson(new ApiResponse(200,retrivedItems,"Retrieved Items Fetched Successfully"));
}); //tested

export {
  postFoundItems,
  getFoundItems,
  getFoundItemsByUId,
  getFoundItemById,
  updateFoundItem,
  getRetrievedItems,
};
