import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/User.model.js";
import { OPTIONS, OTP_SUBJECT } from "../constants.js";
import { OTP } from "../models/OTP.model.js";
import { mailSender } from "../utils/mailSender.js";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});
        return {
            accessToken,
            refreshToken,
        }
    } catch (error) {
        console.log(error.message);
        throw new ApiError(500,"Something Went Wrong while logging in User");
    }
};

const generateOTP = () => {
   let digits = "0123456789";
   let OTP = "";
   let len = digits.length;
   for (let i = 0; i < 6; i++) {
     OTP += digits[Math.floor(Math.random() * len)];
   }

   return OTP; 
}

const sendOTP = asyncHandler(async (req,res) => {
    const { email } = req.body;
    if(!email)
        throw new ApiError(401,"Email Id is Required");

    const otp = generateOTP();
    const sentOTP = await OTP.create({
        email,
        otp,
    });
    if(!sentOTP)
        throw new ApiError(500,"something Went wrong While Sending OTP");
    await mailSender(email,OTP_SUBJECT,`YOUR OTP IS ${otp}`)
    return res
    .status(200)
    .json(
        new ApiResponse(200,sentOTP,`OTP Sent Successfully on mail ${email}`)
    )
});

const resendOTP = asyncHandler(async(req,res) => {
    const { email } = req.body;
    if(!email)
        throw new ApiError(401, "Email Id is Required");
    const otp = generateOTP();
    const existingOTP = await OTP.findOne({email});
    let sentOTP;
    if(existingOTP){
        await OTP.findByIdAndUpdate(
            existingOTP._id,
            {
                $set:{
                    otp,
                    createdAt: new Date(),
                    expiresAt: new Date(),
                }
            },
            {
                new: true,
            }
        );
    }
    else {
        sentOTP = await OTP.create({
            otp,
            email,
        });
        return res.status(200).json(new ApiResponse(200,sentOTP,"OTP sent Successfully"))
    }
     await mailSender(email, OTP_SUBJECT, `YOUR OTP IS ${otp}`);
    return res.
    status(200).
    json(new ApiResponse(200,existingOTP,"OTP sent Successfully"))
});

const signupUser = asyncHandler(async (req,res) => {
    const { rollNo, fullName, password, email, otp } = req.body;
    const avatarLocalFilePath = req.file.path;
    console.log(req.file);
    if([userName, fullName, email, password, otp,avatarLocalFilePath].some((field) => field.trim() === "" ))
        throw new ApiError(401,"All fields are required");

    const existingUser = await User.findOne({
        $or: [{ rollNo }, { email } ],
    });
    if(existingUser)
        throw new Error(403,"User already Registerd with same Email or UserName");
    const receivedOTP = await OTP.findOne({email});
    if(!receivedOTP)
        throw new ApiError(500,"Something Went Wrong");
    if(receivedOTP.expiresAt > new Date())
        throw new ApiError(403, " Otp Expired");
    const avatar = await uploadOnCloudinary(avatarLocalFilePath);
    console.log(avatar);
    if(!avatar)
        throw new ApiError(500,"Something Went wrong while handling Avatar Image");

    const user = await User.create({
        email,
        userName,
        fullName,
        password,
        avatar: avatar.secure_url,
    });
    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if(!createdUser)
        throw new ApiError(501,"Something went wrong while registering the user");
    return res
    .status(200)
    .json(
        new ApiResponse(200,createdUser,"User Registered Successfully")
    )
});

const loginUser = asyncHandler(async(req,res) => {
    const { rollNo, email, password} = req.body;
    if(!(rollNo || email))
        throw new ApiError(400,"Roll Number or Email is Required");
    const user = await User.findOne({
        $or: [ { rollNo }, { email }],
    });
    if(!user)
        throw new ApiError(403,"User not found with provided Email or Username");

    const isPasswordValid = await user.isPasswordCorrect(password);
    if(!isPasswordValid)
        throw new ApiError(403,"Bad Credentials");
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
    const loggedinUser = await User.findById(user._id).select("-password -refreshToken");;
    res
    .status(200)
    .cookie("accessToken",accessToken,OPTIONS)
    .cookie("refreshToken",refreshToken,OPTIONS)
    .json(
        new ApiResponse(
            200,{
                user : loggedinUser, refreshToken, accessToken,
            },"User Loggedin Successfully"
        )
    )

});

const logoutUser = asyncHandler(async(req,res) => {
    const user = req.user;
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1,
            }
        },
        {
            new: true,
        }
    );

    res 
    .status(200)
    .clearCookie("accessToken",OPTIONS)
    .clearCookie("refreshToken",OPTIONS)
    .json(
        new ApiResponse(
            200,{},"User Logged out Successfully",
        )
    )
});



export {
    sendOTP,
    signupUser,
    resendOTP,
    loginUser,
    logoutUser,
}