
const express = require("express")
const { loginUser, registerUser, verifyUser, getUsers, setUser } = require("../controllers/userControllers")

// Initializing router
const router = express.Router()

// routes
router.post("/register", registerUser)
router.post("/verify", verifyUser)
router.post("/login", loginUser)
router.get("/get", getUsers)
router.patch("/set/:id", setUser)


module.exports = router
