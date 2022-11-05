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
app.use("/signin" ,require("./routes/mainRoutes"))


// Connection to Database
mongoose.connect(process.env.DBURI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connnected to DB!")
        })
    })
    .catch(err =>{
        console.log(err)
    })
