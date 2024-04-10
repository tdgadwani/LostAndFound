import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    mobileNumber: {
        type: Number,
        maxlength: 10,
        minlength: 10,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
});

export {
    contactSchema,
}