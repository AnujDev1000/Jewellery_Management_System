const express = require("express")
const { addPurchase, getPurchase, deletePurchase, getSinglePurchase, setPurchase } = require("../controllers/purchaseController")
const requireAuth = require("../middleware/requireAuth")

// Initializing router
const router = express.Router()

router.use(requireAuth)

// routes
router.post("/add", addPurchase)
router.delete("/delete/:id", deletePurchase)
router.get("/get", getPurchase)
router.get("/purchase/:id", getSinglePurchase)
router.patch("/set/:id", setPurchase)


module.exports = router
