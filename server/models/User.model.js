import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { stringify } from "postcss";

const userSchema = new mongoose.Schema(
  {
    rollNo: {
      type: String,
      required: false,
      // unique: true,
      lowercase: true,
      trim: true,
      // index: true,
      validate: {
        validator: (v) => v.length >= 6 && v.length <= 8,
        message: "Rollno must be 6 to 8 characters long",
      },
    },
  
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: false,
      trim: true,
      // index: true,
    },
    avatar: {
      type: String, //from cludinary
      required: false,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    refreshToken: {
      type: String,
    },
    coins: {
      type: Number,
      default: 1,
    },
    lastCheckInDate: {
      type: Number,
      default: Date.now(),
    },
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordTokenExpiry: {
      type: Date,
      default: null,
    },
    isProfileSet:{
      type:Boolean,
      default:false,

    },
    mobileNo:{
      type: Number,
      required: false,
      // unique: true,
      validate: {
        validator: (v) => v.length >= 10 && v.length <= 10,
        message: "mobile no must be 10 characters long",
      },
    },
    college:{
      type:String,
      required:false,

    },
    graduationMonth:{
      type:String,
    },
    graduationYear:{
      type:Number
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
};

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );
};

export const User = mongoose.model("User", userSchema);