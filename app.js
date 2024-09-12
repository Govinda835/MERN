require("dotenv").config()
const express = require("express")
const { connectToDatabase } = require("./database")
const app = express()

app.get("/", (req, res) => {
    res.status(200).json({
        hello: "This is the home page...!!!"
    })
})

app.get("/about", (req, res) => {
    res.status(200).json({
        message: "This is the about page...!!!"
    })
})

connectToDatabase()

app.listen(process.env.PORT, () => {
    console.log("nodeJs project has started....!!!")
})




// mongodb+srv://chaudharygovinda835:<db_password>@govinda835.bzl84.mongodb.net/ 
// govinda
