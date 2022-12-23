const express = require("express")
const { addCustomer, getCustomer, deleteCustomer, getSingleCustomer, setCustomer } = require("../controllers/customerContoller")
const requireAuth = require("../middleware/requireAuth")

// Initializing router
const router = express.Router()

router.use(requireAuth)

// routes
router.post("/add", addCustomer)
router.delete("/delete/:id", deleteCustomer)
router.get("/get", getCustomer)
router.get("/customer/:id", getSingleCustomer)
router.patch("/set/:id", setCustomer)


module.exports = router
