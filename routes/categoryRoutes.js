const express = require("express")
const { addCategory, getCategory, deleteCategory, getSingleCategory, setCategory } = require("../controllers/categoryControllers")
const requireAuth = require("../middleware/requireAuth")

// Initializing router
const router = express.Router()

router.use(requireAuth)

// routes
router.post("/add", addCategory)
router.delete("/delete/:id", deleteCategory)
router.get("/get", getCategory)
router.get("/category/:id", getSingleCategory)
router.patch("/set/:id", setCategory)


module.exports = router
