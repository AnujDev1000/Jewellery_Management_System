const express = require("express")
const { addEmployee, getEmployee, deleteEmployee, getSingleEmployee, setEmployee } = require("../controllers/employeeController")
const requireAuth = require("../middleware/requireAuth")

// Initializing router
const router = express.Router()

router.use(requireAuth)

// routes
router.post("/add", addEmployee)
router.delete("/delete/:id", deleteEmployee)
router.get("/get", getEmployee)
router.get("/employee/:id", getSingleEmployee)
router.patch("/set/:id", setEmployee)


module.exports = router
