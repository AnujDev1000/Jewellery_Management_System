const express = require("express")
const { addProduct, getProduct } = require("../controllers/productController")

// Initializing router
const router = express.Router()

// routes
router.post("/add", addProduct)
router.get("/get", getProduct)


module.exports = router
