const BigPromise = require("../middlewares/bigPromise");
const Dish = require("../models/dish");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const CustomError = require("../utils/customError");

exports.add_dish = BigPromise(async (req, res) => {
	if (!req.files) {
		return next(new CustomError("photo is required for signup", 400));
	}

	const { dish_name, desc, recipe } = req.body;

	if (!dish_name || !desc || !recipe) {
		return next(
			new CustomError("dish_name, desc and recipe are required", 400)
		);
	}

	let file = req.files.photo;
	const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
		folder: "dishs",
		width: 150,
		crop: "scale",
	});

	const dish = await Dish.create({
		dish_name,
		desc,
		recipe,
		image: {
			id: result.public_id,
			secure_url: result.secure_url,
		},
	});

	res.status(200).json({
		success: true,
		message: "dish added to the database",
		dish,
	});
});

exports.getdish = BigPromise(async (req, res) => {
	const { id } = req.params;

	const dish = await Dish.findById(id);

	res.status(200).json({
		success: true,
		dish,
	});
});

exports.getAllDishes = BigPromise(async (req, res, next) => {
	try {
		const Dishs = await Dish.find({});
		res.status(200).json({
			success: true,
			Dishs,
		});
	} catch (err) {
		console.error("Error retrieving documents from MongoDB Atlas", err);
	}
});
