const express = require("express");
const router = express.Router();

const {
	add_dish,
	getdish,
	getAllDishes,
} = require("../controllers/dishController");

router.route("/add_dish").post(add_dish);
router.route("/getdish/:id").get(getdish);
router.route("/getAllDishes").get(getAllDishes);

module.exports = router;
