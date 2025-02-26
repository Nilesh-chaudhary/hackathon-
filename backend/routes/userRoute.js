const express = require("express");

const {
    register,
    loginUser,
    logout,
    getUserDetails,
    calling,
} = require("../controllers/userController");

const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/calling").get(calling);
router.route("/me").get(isAuthenticatedUser, getUserDetails);


module.exports = router;