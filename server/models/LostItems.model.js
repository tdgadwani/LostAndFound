import mongoose from "mongoose";
import { addressSchema } from "./Address.model.js";
import { contactSchema } from "./Contact.model.js";

const lostItemsSchema =new mongoose.Schema({
	userId: {
		type:mongoose.Schema.Types.ObjectId,
		ref:'User' ,
		required: true,
	},
	itemName: {
         type:String,
         required:true,
	},
         media: [
            {
              type: String,
            },
          ],
	category: {
		type:String,
		required:true,
		enum: ['Electronics', 'Clothing', 'Accessories', 'Books', 'Jewelry', 'Others'] 
	},
	description: {
		type: String,
		required: true
	},
	address: {
		type: addressSchema,
		required: true,
	},
	contactInfo: {
		type: contactSchema,
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

lostItemsSchema.index({
	location: "2dsphere",
})

const LostItem = mongoose.model("LostItem", lostItemsSchema);

export { LostItem };
