const mongoose = require("mongoose")
const express = require("express")
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

// Listening to port
app.listen(process.env.PORT, () => {
    console.log("Listening to port : " + process.env.PORT)
})

// Connection to Database
mongoose.connect(process.env.DBURI)
    .then(() => {
        console.log("Connnected to DB!")
    })
    .catch(err =>{
        console.log(err)    
    })


// git add . && git commit -m "COMMIT" && git push origin main