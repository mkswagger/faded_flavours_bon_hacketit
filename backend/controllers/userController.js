const BigPromise = require("../middlewares/bigPromise");
const User = require("../models/user");

//localhost:
exports.adduser = BigPromise(async (req, res) => {
	const { name, phoneNum, email, address } = req.body;

	const user = await User.create({
		name,
		phoneNum,
		email,
	});

	res.status(200).json({
		success: true,
		message: "user added to the database",
		user,
	});
});

exports.getuser = BigPromise(async (req, res) => {
	const { id } = req.params;

	console.log(id);
	const user = await User.findById(id);

	res.status(200).json({
		success: true,
		user,
	});
});
