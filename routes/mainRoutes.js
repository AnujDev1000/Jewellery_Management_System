const express = require("express")

// Initializing router
const router = express.Router()

// routes
router.get("/signup", (req, res) => {
    res.json("Signup Page!")
})

router.get("/", (req, res) => {
    res.json("Signin Page!")
})


module.exports = router
