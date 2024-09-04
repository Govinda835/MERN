const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.json({
        message: "This is the home page...!!!"
    })
})

app.get("/about",(req,res)=>{
    res.json({
        message: "This is the about page...!!!"
    })
})

app.listen(3000, ()=>{
    console.log("nodeJs project has been started....!!!")
})
