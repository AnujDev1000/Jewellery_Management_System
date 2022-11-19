const express = require("express")
const { addProduct, getProduct, deleteProduct, getSingleProduct, setProduct } = require("../controllers/productController")
const requireAuth = require("../middleware/requireAuth")

// Initializing router
const router = express.Router()

router.use(requireAuth)

// routes
router.post("/add", addProduct)
router.delete("/delete/:id", deleteProduct)
router.get("/get", getProduct)
router.get("/product/:id", getSingleProduct)
router.patch("/set/:id", setProduct)


module.exports = router
