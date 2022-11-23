const express = require("express")
const { loginUser, registerUser, verifyUser } = require("../controllers/userControllers")

// Initializing router
const router = express.Router()

// routes
router.post("/register", registerUser)
router.post("/verify", verifyUser)
router.post("/login", loginUser)


module.exports = router
