import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    buildingName: {
        type: String,
        required: true,
    },
    collegeName: {
        type: String,
        default: "NIT Patna",
    },
});

export {
    addressSchema,
}