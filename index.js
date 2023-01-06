const mongoose = require("mongoose")
const express = require("express")
const path = require("path")
const errorHandler = require("./middleware/errorHandler")
require("dotenv").config()

// Express App
const app = express()

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use("/api/users" ,require("./routes/userRoutes"))
app.use("/api/products" ,require("./routes/productsRoutes"))
app.use("/api/categories" ,require("./routes/categoryRoutes"))
app.use("/api/suppliers" ,require("./routes/suppliersRoutes"))
app.use("/api/stocks" ,require("./routes/stockRoutes"))
app.use("/api/orders" ,require("./routes/orderRoutes"))
app.use("/api/employees" ,require("./routes/employeeRoutes"))
app.use("/api/customers" ,require("./routes/customerRoutes"))
app.use("/api/purchases" ,require("./routes/purchaseRoutes"))

// Static files
app.use(express.static(path.join(__dirname, "./frontend/build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"), function (err) {
        res.status(404).send(err)
    })
})

// Connection to Database
mongoose.connect(process.env.DBURI)
    .then(() => {
        console.log("Connnected to DB!")
        app.listen(process.env.PORT, () => {
            console.log("Listening to port : " + process.env.PORT)
            console.log("URL : http://localhost:4000/")
        })
    })
    .catch(err =>{
        console.log(err)    
    })


// git add . && git commit -m "COMMIT" && git push origin main