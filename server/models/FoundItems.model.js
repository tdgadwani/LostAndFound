import mongoose from "mongoose";
import { addressSchema } from "./Address.model.js";
import { contactSchema } from "./Contact.model.js";

const foundItemsSchema = new mongoose.Schema({
	itemName: {
		type: String,
		required: true
	},
 	 category: {
		type: String,
		required: true,
		enum: ['Electronics', 'Clothing', 'Accessories', 'Books', 'Jewelry', 'Others'] 
  	},
  	description: {
    	type: String,
    	required: true
  	},	
  	address: {
		type: addressSchema,
		required: true
	},
  	contactInfo: {
    	type: contactSchema,
    	required: true
  	},
  	dateFound: {
    	type: Date,
    	required: true,
    	default: Date.now,
  	},
	userId: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'User',
    	required: true,
  },
},
	{
    timestamps: true,
	}
);

foundItemsSchema.index({
  location: "2dsphere"
});

const FoundItem = mongoose.model("FoundItem", foundItemsSchema);

export { FoundItem };
