import mongoose,{ Schema } from "mongoose";

const resetpasswordSchema= new mongoose.Schema({
    resetPasswordToken:{
       type: String,
       required: true,
    },
    tokenExpiry:{
        type: Number ,
        required: true,
        default: Date.now(),
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' ,
        required: true,
    },
});

const ResetPassword=mongoose.model("ResetPassword",resetpasswordSchema);

export{
    ResetPassword
};