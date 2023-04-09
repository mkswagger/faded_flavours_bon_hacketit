const app = require("./app");
require("dotenv").config();
const connectWithDb = require("./config/db");
const cloudinary = require("cloudinary");

// connect with database
connectWithDb();

//connect with cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

// running the server
app.listen(process.env.PORT, () => {
	console.log(
		`server is running at port: http://localhost:${process.env.PORT}`
	);
});
