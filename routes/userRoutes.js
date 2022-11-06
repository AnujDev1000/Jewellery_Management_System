const express = require("express")
const { loginUser, registerUser } = require("../controllers/userControllers")

// Initializing router
const router = express.Router()

// routes
router.post("/register", registerUser)

router.post("/login", loginUser)


module.exports = router
