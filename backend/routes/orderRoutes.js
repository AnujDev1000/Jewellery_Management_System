const express = require("express")
const { addOrder, getOrder, deleteOrder, getSingleOrder, setOrder } = require("../controllers/orderController")
const requireAuth = require("../middleware/requireAuth")

// Initializing router
const router = express.Router()

router.use(requireAuth)

// routes
router.post("/add", addOrder)
router.delete("/delete/:id", deleteOrder)
router.get("/get", getOrder)
router.get("/order/:id", getSingleOrder)
router.patch("/set/:id", setOrder)


module.exports = router
