import { AsyncHandler, asynchandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { LostItem } from "../models/LostItems.model.js";
import { User } from "../models/User.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const postLostItems=AsyncHandler(async(req,res,_)=>
{
 const{itemName,category,description, address,contactInfo}= req.body;
 if (
    [itemName,category,description, address,contactInfo ].some(
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
    let Lost;
    const user = await User.findById(req._id);
    Lost = await LostItem.create({

      itemName,
      category,
      description,
      media,
      reportedBy: req.user._id,
      address,
      contactInfo,
    });
    if (!Lost) throw new ApiError(500, "Unable to post lost item");
    return res
      .status(200)
      .json(new ApiResponse(200, Lost , "Lostitem posted Successfully"));
  
});
// export { LostItem };
const getLostItems=AsyncHandler(async(req,res,_)=>
{
    const lostitems=await LostItem.find({}).populate({
        path:"userId",
        select:"username  contactInfo"
    }).exec();
    if(!lostItems)
    {
        throw new ApiError(500,"Unable to fech Lost Items");
    }
    return res.status(200).json(new ApiResponse(200, lostItems, "Lost Items fetched Successfully"));
    
});

const getLostItemsById=AsyncHandler(async(req,res,_)=>{
    const { id}=req.params;

    if(!id)
    {
        throw new ApiError(400,"Lost Item ID is required");
    }
    try
    {
        const LostItembyId= await LostItem.findById(id);

        if(!LostItembyId)
        {
            throw new ApiError(404,"Lost Item not found");
        }
        return res.status(200).json(new ApiResponse(200, LostItembyId, "Lostitem fetched successfully" ));
    }catch(error)
    {
        console.error(error);
        return res.status(error.statusCode||500).json({message:error.message});
    }
});

 const getLostItemsByUId=AsyncHandler(async(req,res,_)=>{
    const { user_id } = req.query;
    if(!user_id)
    {
        throw new ApiError(400,"Missing required parameter: user_id");
    }
    try
    {
        const LostItemByUId=await LostItem.find({user_id});

        if(!LostItemByUId)
        {
            throw new ApiError(404,"No Lost Items found for this user");
        }
        return res.status(200).json( new ApiResponse(200, lostItems, "Lost Items fetched Successfully"));

    }catch(error)
    {
        console.error(error);
        return res.status(error.statusCode || 500).json({ message: error.message });
    }
 });
 export {
    postLostItems,
    getLostItems,
    getLostItemsById,
    getLostItemsByUId,

 };
