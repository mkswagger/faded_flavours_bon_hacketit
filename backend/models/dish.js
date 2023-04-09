const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
	dish_name: {
		type: String,
		required: [true, "please provide parcel category"],
		trim: true,
		maxlength: [20, "product name should not be more than 20 chanracters"],
	},
	desc: {
		type: String,
		required: [true, "please provide owner name"],
		trim: true,
		maxlength: [30, "owner name should not be more than 30 chanracters"],
	},
	recipe: {
		type: String,
		required: [true, "please provide address from the parcel to be sent from"],
		trim: true,
		maxlength: [60, "address should not be more than 60 chanracters"],
	},
	image: {
		id: {
			type: String,
			required: true,
		},
		secure_url: {
			type: String,
			required: true,
		},
	},
});

module.exports = mongoose.model("Dish", dishSchema);
