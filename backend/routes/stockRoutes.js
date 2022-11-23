const express = require("express")
const { addStock, getStock, deleteStock, getSingleStock, setStock } = require("../controllers/stockController")
const requireAuth = require("../middleware/requireAuth")

// Initializing router
const router = express.Router()

router.use(requireAuth)

// routes
router.post("/add", addStock)
router.delete("/delete/:id", deleteStock)
router.get("/get", getStock)
router.get("/stock/:id", getSingleStock)
router.patch("/set/:id", setStock)


module.exports = router
