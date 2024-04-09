import mongoose from "mongoose";

const lostItemsSchema =new mongoose.Schema(
    {
        userId:
        {
         type:mongoose.Schema.Types.ObjectId,
         ref:'User' ,
         required: true,
        },
        itemName:
        {
         type:String,
         required:true,
        },
        category:
        {
          type:String,
          required:true,
          enum: ['Electronics', 'Clothing', 'Accessories', 'Books', 'Jewelry', 'Others'] 
        },
        description: {
            type: String,
            required: true
          },
        location: {
            type: {
              type: String,
              default: "Point",
            },
            coordinates: {
              type: [Number],
              index: "2dsphere",
            }, // Index for geospatial queries
        },
        contactInfo: {
            type: String,
            required: true
        },
         dateLost: {
            type: Date,
            required: true,
            default: Date.now
        }
    },
    {
        timestamps: true,
    }

);
const LostItem = mongoose.model("LostItem", lostItemsSchema);

export { LostItem };