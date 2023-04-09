const express = require("express");
const router = express.Router();

const { adduser, getuser } = require("../controllers/userController");

router.route("/adduser").post(adduser);
router.route("/getuser/:id").get(getuser);

module.exports = router;
