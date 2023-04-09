const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide a name."],
		maxlength: [40, "Name should be under 40 characters."],
	},
	phoneNum: {
		type: Number,
		required: [true, "please provide phone number."],
		maxlength: [10, "please provide a valid phone number."],
		minlength: [10, "please provide a valid phone number."],
	},
	email: {
		type: String,
		required: [true, "Please provide an email."],
		validate: [validator.isEmail, "Please enter email in correct format"],
		unique: true,
	},
});

module.exports = mongoose.model("FadedFlavousUser", userSchema);
