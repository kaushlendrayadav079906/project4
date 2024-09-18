const express = require('express');
const router = express.Router(); // Initialize router
const authController = require("../controllers/auth.controller");
const authMW = require("../middlewares/auth.mw");

// Route for POST localhost:8888/ecomm/api/v1/auth/signup
router.post("/signup", authController.signup);

// Route for POST localhost:8888/ecomm/api/v1/auth/signin
router.post("/signin", authController.signin);

module.exports = router; // Export the router
