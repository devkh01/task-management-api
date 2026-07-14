const express = require("express");
const router = express.Router();
const validateRegisterUser = require("../middlewares/validateRegisterUser");
const validateLoginUser = require("../middlewares/validateLoginUser")
const {registerUser, loginUser} = require("../controllers/authController")


router.post("/registerUser", validateRegisterUser, registerUser);
router.post("/loginUser", validateLoginUser , loginUser);


module.exports = router;