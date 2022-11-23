const express = require("express")
const { addSupplier, getSupplier, deleteSupplier, getSingleSupplier, setSupplier } = require("../controllers/supplierController")
const requireAuth = require("../middleware/requireAuth")

// Initializing router
const router = express.Router()

router.use(requireAuth)

// routes
router.post("/add", addSupplier)
router.delete("/delete/:id", deleteSupplier)
router.get("/get", getSupplier)
router.get("/supplier/:id", getSingleSupplier)
router.patch("/set/:id", setSupplier)


module.exports = router
